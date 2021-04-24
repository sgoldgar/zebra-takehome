# Questions from Exercise/Callouts

- Basetica (used on The Zebra site) is not free font, so I used Raleway instead
- From the mockup, it looks like cards with "Verified price" tag get the star on the corner, but I was not completely sure on that
- Some of the ordering that comes back on `carrier_cards.json` seems to not be in strict order (some cards are always prioritized, even if they don't have explicit price, etc). I'm not sure if this is intentional product decision, or should be accounted for in sort function
- The instructions said to use `features_html` to populate the list of features, but looking at the mockup, it seemed like the feature list actually corresponded to the names of the features in `features` array. I used those, but if I were to need to use `features_html`, I would just set it as `dangerouslySetInnerHtml` when passed as props.
- I have implemented one unit test for a function and one storybook test for a UI element. With more time, I would have implemented more Enzyme based tests, but was having trouble with the TS setup with Enzyme.
- This application is not fully mobile responsive, due to time restrictions

# Instructions

The challenge is to implement a single page application using a modern Javascript framework (React, Angular, etc.) and pre-processed CSS (SASS, SCSS, LESS, etc.) based on the ​.zip that is attached to this email. Feel free to use a scaffolding tool (like create-react-app) to get started. We're looking for ​production-quality​ code that's well-organized and well-documented, and not necessarily with a lot of bells and whistles (a plain page that works is better than a fancy page that doesn’t).
Spend about 4-6 hours on this assignment, and work on the following tests and see how much you can accomplish in that timeframe. Please get it back to us within 7 days.

Requirements:
● Use the provided ​carrier_cards.json as the payload from a mock API request to populate the page with insurance carrier cards.
● Each carrier card should expand and contract smoothly when clicked to display additional information from the ​detail_body and ​features_html nodes in
carrier_cards.json. (​In the mockup, Liberty Mutual is expanded, the others are not​.) ● Cards with type 0 or 1 should have a blue button, cards with type 3 should have an orange button, cards with type 2 should have no button. Clicking the button should open a new tab with the address being the ​action.link of the card in ​carrier_cards.json. ● Feature icons below the carrier name (next to the stars) are listed in the ​features node with the name of the icon. (​The features list in the details section is from the features_html node.​)
● Carrier logos are not included, just use ​logo-carrier-sm-default.png from the assets folder as a placeholder.
● Thoroughly unit test ​one​ of your components. (​We’d rather see full coverage of one component than partial coverage of multiple.​)
● You will not use all the fields in ​carrier_cards.json.
● Optional​: Implement a sorter: by price, rating (stars), and alphabetical. (note: sorting of cards does not need to be animated)
Colors from mockup:
● Purple: #5c6cff
● Yellow button: linear-gradient (350deg, #f87000 40%, #f8ae00 85%)
● Blue button: linear-gradient (350deg, #6169f4 40%, #1cbeec 85%)
● Gray text: #959595

Things we’re looking for:
● Overall code organization, structure, and naming conventions
● How reusable is the code?
● Design patterns? Anti-patterns?
● Appropriate documentation (comments, readme, etc..)
● Comprehensive unit tests for one component
