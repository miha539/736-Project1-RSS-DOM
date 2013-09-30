var myoption = new Object();
myoption["initial"] = ["1","Choose your Source","Newspaper","Magazines"];

myoption["Newspaper"] = ["2","Choose which newspaper","CNN","BBC"];
myoption["Magazines"] = ["2","Choose which magazine?","TIME","Discover"];

myoption["CNN"] = ["3","CNN - Choose category?","Top Stories","World","Sports","Business","Politics","Technology","Health","Entertainment","U.S.","Travel","Crime"];
myoption["BBC"] = ["3","BBC - Choose category?","Top Stories","World","Business","Politics","Technology","Entertainment & Arts","UK","Special Reports","Science & Environment","Education & Family"];
myoption["TIME"] = ["3","TIME - Choose topic?","Top Stories","World","Opinion","Science","Money","Science"];
myoption["Discover"] = ["3","Discover - Choose topic?","Top Stories","Cosmic Variance","The Crux","Discoblog","Collide-a-Scape","Mind Brain"];

/*this option makes the Select menu go four levels deep*/
myoption["Science"] = ["4","TIME - Science - Choose topic?","Actual Science","Ecocentric"];

var mychoices = new Object;
mychoices["Newspaper_CNN_Top Stories_"]="http://rss.cnn.com/rss/cnn_topstories.rss";
mychoices["Newspaper_CNN_World_"]="http://rss.cnn.com/rss/cnn_world.rss";
mychoices["Newspaper_CNN_Sports_"]="http://rss.cnn.com/rss/si_topstories.rss";
mychoices["Newspaper_CNN_Business_"]="http://rss.cnn.com/rss/money_latest.rss";
mychoices["Newspaper_CNN_Politics_"]="http://rss.cnn.com/rss/cnn_allpolitics.rss";
mychoices["Newspaper_CNN_Technology_"]="http://rss.cnn.com/rss/cnn_tech.rss";
mychoices["Newspaper_CNN_Health_"]="http://rss.cnn.com/rss/cnn_health.rss";
mychoices["Newspaper_CNN_Entertainment_"]="http://rss.cnn.com/rss/cnn_showbiz.rss";
mychoices["Newspaper_CNN_U.S._"]="http://rss.cnn.com/rss/cnn_us.rss";
mychoices["Newspaper_CNN_Travel_"]="http://rss.cnn.com/rss/cnn_travel.rss";
mychoices["Newspaper_CNN_Crime_"]="http://rss.cnn.com/rss/cnn_crime.rss";

mychoices["Newspaper_BBC_Top Stories_"]="http://feeds.bbci.co.uk/news/rss.xml";
mychoices["Newspaper_BBC_World_"]="http://feeds.bbci.co.uk/news/world/rss.xml";
mychoices["Newspaper_BBC_Business_"]="http://feeds.bbci.co.uk/news/business/rss.xml";
mychoices["Newspaper_BBC_Politics_"]="http://feeds.bbci.co.uk/news/politics/rss.xml";
mychoices["Newspaper_BBC_Technology_"]="http://feeds.bbci.co.uk/news/technology/rss.xml";
mychoices["Newspaper_BBC_Entertainment & Arts_"]="http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml";
mychoices["Newspaper_BBC_UK_"]="http://feeds.bbci.co.uk/news/uk/rss.xml";
mychoices["Newspaper_BBC_Special Reports_"]="http://feeds.bbci.co.uk/news/special_reports/rss.xml";
mychoices["Newspaper_BBC_Science & Environment_"]="http://feeds.bbci.co.uk/news/science_and_environment/rss.xml";
mychoices["Newspaper_BBC_Education & Family_"]="http://feeds.bbci.co.uk/news/education/rss.xml";

mychoices["Magazines_TIME_Top Stories_"]="http://feeds2.feedburner.com/time/topstories";
mychoices["Magazines_TIME_World_"]="http://feeds2.feedburner.com/time/world";
mychoices["Magazines_TIME_Opinion_"]="http://feeds.feedburner.com/time/ideas";
mychoices["Magazines_TIME_Money_"]="http://feeds.feedburner.com/time/moneyland";

mychoices["Magazines_TIME_Science_Actual Science_"]="http://feeds2.feedburner.com/time/scienceandhealth";
mychoices["Magazines_TIME_Science_Ecocentric_"]="http://feeds2.feedburner.com/timeblogs/ecocentric";

mychoices["Magazines_Discover_Top Stories_"]="http://feeds.feedburner.com/DiscoverTopStories";
mychoices["Magazines_Discover_Cosmic Variance_"]="http://feeds.feedburner.com/CosmicVariance";
mychoices["Magazines_Discover_The Crux_"]="http://feeds.feedburner.com/discovercrux";
mychoices["Magazines_Discover_Discoblog_"]="http://feeds.feedburner.com/DiscoverDiscoblog";
mychoices["Magazines_Discover_Collide-a-Scape_"]="http://feeds.feedburner.com/collide-a-scape";
mychoices["Magazines_Discover_Mind Brain_"]="http://feeds.feedburner.com/DiscoverMindBrain";

