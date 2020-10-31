# Rainy Dawg Radio Website

This is a React App that uses various APIs to centralize all the information and interactivity of a local radio station, Rainy Dawg Radio. It's used by hundreds of students at the University of Washington for listening to music and finding out about local events. These are some of the features the site offers:

- Livestreamed audio from a physical studio to the website's audio player. The player is also capable of listing the song name, artist, radio show names, and DJs in real time.
- APIs to pull information from the station's Facebook, Twitter, Tumblr, and Spinitron accounts.
- Automatically updates information about radio station DJs, shows, and the show schedule through Spinitron API.
- Various static information about the radio station, its staff, and its values. Also used to promote upcoming music and community events.
- (Not contained in repo but a part of the site) A web scraper that watches this site for listener activity. Automated scrapes and storage of statistics in Firebase, and plotted to a secondary website with Plotly.JS for radio station staff to analyze for listener trends.
- (Formerly part of the site but retired) A form for cataloging physical music into the station's music database. Used PHP and MySQL for song entry, organization, and querying with a web form.
