package ro.sync.search;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.util.Arrays;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.algolia.search.DefaultSearchClient;
import com.algolia.search.SearchClient;
import com.algolia.search.SearchIndex;

/**
 * Class that handles Algolia API calls.
 * 
 * @author Artiom Bozieac
 *
 */
public class AlgoliaClient {
	/**
	 * Logger to inform user about certain actions like errors and others.
	 */
	private static final Logger logger = LoggerFactory.getLogger(AlgoliaClient.class);
	/**
	 * Crawler that crawls a URL and extracts data from it.
	 */
	private Crawler crawler;
	/**
	 * Properties file used to get values for API keys and others.
	 */
	private Properties properties;
	/**
	 * Algolia application's id.
	 */
	private String appId;
	/**
	 * Algolia admin's key to perform actions.
	 */
	private String adminApiKey;
	/**
	 * Client that performs operations such as indices management.
	 */
	private SearchClient client;
	/**
	 * Index that stores the current index performing actions on;
	 */
	private SearchIndex<Page> index;

	/**
	 * Constructor with URL to get data from.
	 * 
	 */
	public AlgoliaClient() {
		try (InputStream input = new FileInputStream("config.properties")) {
			properties = new Properties();

			// load a properties file
			properties.load(input);
			appId = properties.getProperty("algolia.appId");
			adminApiKey = properties.getProperty("algolia.adminApiKey");

			client = DefaultSearchClient.create(appId, adminApiKey);
		} catch (IOException e) {
			logger.error("An error occured when trying to load properties");
			logger.error(Arrays.toString(e.getStackTrace()));
		}
	}

	/**
	 * Initialize a new index containing all the pages and sets it to "index"
	 * property. If indexName exists then it selects it without recreating it.
	 * 
	 * @param indexName is the name to be assigned to index.
	 */
	public void initIndex(final String indexName) {
		index = client.initIndex(indexName, Page.class);
		logger.info("Index {} succesfully created/selected!", indexName);
	}

	/**
	 * Adds crawled pages from Crawler object to index.
	 */
	public void addObjectToIndex(final String url, final String baseUrl) {
		try {
			crawler = new Crawler(url, baseUrl);
		} catch (MalformedURLException e) {
			logger.error("An error occured when crawling URL: {}", url);
			logger.error(Arrays.toString(e.getStackTrace()));
		}
		crawler.crawl();

		index.saveObjects(crawler.getCrawledPages());
		logger.info("{} Page object(s) successfully added to {} index!", crawler.getCrawledPages().size(),
				index.getUrlEncodedIndexName());
	}
}
