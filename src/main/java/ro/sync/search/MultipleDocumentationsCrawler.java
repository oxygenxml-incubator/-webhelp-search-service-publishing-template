package ro.sync.search;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

/**
 * Crawler that crawls over multiple documentations.
 * 
 * @author Bozieac Artiom
 *
 */
public class MultipleDocumentationsCrawler extends AbstractCrawler<MultipleDocumentationsPage> {
	/**
	 * Documentation's name.
	 */
	private String documentationName = "";

	/**
	 * Constructor with url and baseUrl parameters.
	 * 
	 * @param url     is the page that should be crawled for data.
	 * @param baseUrl is the parent that is used to not go out of bounds.
	 * @param isFile  is the flag that indicates if you passed and URL to the file
	 *                or a website.
	 * 
	 * @throws IOException if problems with initaliztion of URL or accessing the
	 *                     nodesToIgnore.csv file occurred.
	 */
	protected MultipleDocumentationsCrawler(String url, String baseUrl, boolean isFile) throws IOException {
		super(url, baseUrl, isFile);

		if (baseUrl.endsWith("index.html")) {
			this.baseUrl = baseUrl.substring(0, baseUrl.indexOf("index.html"));
		}
	}

	/**
	 * Collects all the data(titles, keywords and content) from visited urls and
	 * creates a new Page object.
	 * 
	 * @param page is the desired document whose data should be collected.
	 */
	@Override
	protected void collectData(final Document page) {
		pages.add(((MultipleDocumentationsPage) ((MultipleDocumentationsPage) new MultipleDocumentationsPage()
				.setTitle(collectTitle(page)).setShortDescription(collectShortDescription(page))
				.setKeywords(collectKeywords(page))).setBreadcrumb(collectBreadcrumb(page))
				.setContent(collectContent(page)).setUrl(page.baseUri())).setDocumentation(this.documentationName));

		logger.info("Page {} was crawled!", page.title());
	}

	/**
	 * Collects page's breadcrumb from the top of the page.
	 * 
	 * @param page is the page whose breadcrumb should be collected.
	 * @return page's breadcrumb that is a list of entries with title and relative
	 *         path.
	 */
	private List<Map.Entry<String, String>> collectBreadcrumb(final Document page) {
		List<Map.Entry<String, String>> breadcrumb = new ArrayList<>();

		// Remove the short description in the breadcrumb that is not visible to the
		// user.
		page.select("div.wh-tooltip").remove();

		// Extract every category of the breadcrumb.
		for (Element el : page.select("div.wh_breadcrumb > ol > li")) {
			if (el.text().equals("Home"))
				breadcrumb.add(Map.entry(el.text(), el.child(0).child(0).absUrl("href")));
			else
				breadcrumb.add(Map.entry(el.text(), el.child(0).child(0).child(0).absUrl("href")));
		}

		return breadcrumb;
	}

	/**
	 * @param documentationName is the name to be set for documentation's name.
	 * @return current instance of Crawler.
	 */
	public MultipleDocumentationsCrawler setDocumentationName(final String documentationName) {
		this.documentationName = documentationName;
		return this;
	}
}
