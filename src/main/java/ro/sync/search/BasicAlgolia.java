package ro.sync.search;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.algolia.search.DefaultSearchClient;
import com.algolia.search.SearchClient;
import com.algolia.search.SearchIndex;
import com.algolia.search.models.settings.IndexSettings;

/**
 * Class that handles Algolia API calls for basic use case, when you need to
 * collect only title, keywords, short description and content.
 * 
 * @author Artiom Bozieac
 */
public class BasicAlgolia {
	/**
	 * Logger to inform user about certain actions like errors and others.
	 */
	private static final Logger logger = LoggerFactory.getLogger(BasicAlgolia.class);
	/**
	 * Algolia application's id.
	 */
	protected String appId;
	/**
	 * Algolia admin's key to perform actions.
	 */
	protected String adminApiKey;
	/**
	 * Client that performs operations such as indices management.
	 */
	protected SearchClient client;
	/**
	 * Index that stores the current index performing actions on;
	 */
	protected SearchIndex<BasicPage> basicIndex;

	/**
	 * Constructor to set up all the necessary data like properties for Algolia
	 * connection.
	 * 
	 * @throws IOException if a problem with loading config properties occured.
	 * 
	 */
	public BasicAlgolia() throws IOException {
		try (InputStream input = new FileInputStream("config.properties")) {
			Properties properties = new Properties();

			// Load a properties file.
			properties.load(input);

			appId = properties.getProperty("algolia.appId");
			adminApiKey = properties.getProperty("algolia.adminApiKey");

			client = DefaultSearchClient.create(appId, adminApiKey);
		}
	}

	/**
	 * Adds crawled pages from Crawler object to index.
	 * 
	 * @param url     is the URL whose pages should be added to index.
	 * @param baseUrl is the base URL that is used to not go out of bounds.
	 * 
	 * @throws IOException if Crawler was failed to initiate or the HTML File
	 *                     couldn't be read.
	 */
	protected void populateIndex(final String url, final String baseUrl, final boolean isFile) throws IOException {
		BasicCrawler crawler = new BasicCrawler(url, baseUrl, isFile);
		crawler.crawl();

		basicIndex.setSettings(new IndexSettings()
				.setSearchableAttributes(Arrays.asList("title", "shortDescription", "content"))
				.setCustomRanking(Arrays.asList("desc(title)", "desc(shortDescription)", "desc(content)"))
				.setAttributesToHighlight(Arrays.asList("title", "shortDescription", "content"))
				.setAttributesToSnippet(Arrays.asList("content:30")).setAttributesForFaceting(Arrays.asList("_tags")));

		basicIndex.saveObjects(crawler.getCrawledPages());
		logger.info("{} Page object(s) successfully added to {} index!", crawler.getCrawledPages().size(),
				basicIndex.getUrlEncodedIndexName());
	}

	/**
	 * Use arguments to crawl the documentation and push it to Algolia index.
	 * 
	 * @param args is the array with indexName, url, baseUrl.
	 * @throws IOException              if config.properties file is not set, path
	 *                                  to the documents is wrong or profilingPath
	 *                                  is invalid.
	 * @throws IllegalArgumentException if passed arguments are invalid.
	 */
	public void useArguments(final String... args) throws IOException, IllegalArgumentException {
		String url = "";
		String baseUrl = "";
		String indexName = "";
		String isFile = "";

		for (String arg : args) {
			if (arg.startsWith("-url="))
				url = arg.substring(5, arg.length());
			else if (arg.startsWith("-baseUrl="))
				baseUrl = arg.substring(9, arg.length());
			else if (arg.startsWith("-indexName="))
				indexName = arg.substring(11, arg.length());
			else if (arg.startsWith("-isFile="))
				isFile = arg.substring(8, arg.length());
		}

		if (url.isEmpty() || baseUrl.isEmpty() || indexName.isEmpty() || isFile.isEmpty())
			throw new IllegalArgumentException();

		final boolean isFileFlag = isFile.equals("true");

		basicIndex = client.initIndex(indexName, BasicPage.class);
		basicIndex.clearObjects();
		populateIndex(isFileFlag ? Path.of(url).toUri().toURL().toString() : url,
				isFileFlag ? Path.of(baseUrl).toUri().toURL().toString() : baseUrl, isFileFlag);
	}
}
