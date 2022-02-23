# 🛫 TravelCheckr.eu

In May of 2020 I built a website that allowed people to easily understand COVID restrictions for NL. Not following up on this website, I spotted a frustration of mine in the winter of 2021; travelling through Europe. Each country had its own restrictions. All of them were very difficult to really understand.

I built the concept where restrictions are simplified down to what you should 'do', 'bring', 'know' 'expect' about your trip. When planning your trip, you can quickly check what you need to know. 

**I decided not to continue maintaining the application, since COVID restrictions are largely lifted.**

## Tech
I used this project as an experiment to get familiar with SvelteKit. The app is hosted with Vercel at [travelcheckr.eu](http://www.travelcheckr.eu). 

For the backend I use Notion with its API. In Notion I use the 'timeline' view to organise rules by date, and make it easy to manage them. 

When a user enters his information, a request is made to the SvelteKit endpoint, which in turn makes a query to the Notion API. Upon returning the data, the data is processed and displayed in a neat overview.

I hope this site provides some form of inspiration. I had a ton of fun building it 🙂.
