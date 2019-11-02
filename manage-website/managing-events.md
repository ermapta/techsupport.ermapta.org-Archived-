# Managing events

We use the [EventON plugin](https://www.myeventon.com/) to manage events. EventON is a very sophisticated event management plugin with a variety of calendar types and a rich taxonomy system (this will make sense in a sec).

::: tip Demo
EventON demo: <https://demo.myeventon.com/>
:::

## Creating events

Creating events is extremely simple. Like other post types, the key fields on an event are its title, description, featured image, etc. In addition to this, the event can be categorized for richer filtering or similar purposes.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0dod0m3Flvg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The EventON taxonomy

Events have a rich taxonomy (system of classification, if you don't remember your middle school biology). Events can be extended in a few different ways including types and tags. This taxonomy helps as follows:

- Event types can be assigned a specific color, and calendars can be configured to use the event type color; together this allows us to easily assign all fundraisers a certain color
- Calendars can be filtered by users to a particular event type or tag; this allows users to search for fundraisers (an event type) that involve food (a tag)
- Calendars can be constrained with a shortcode to show only a particular event type; this allows us to create for instance a calendar that omits uninteresting events or shows only the next fundraiser

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/G9vhObbsCP8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The taxonomy is designed to be customized to our needs. We have the option of using tags + up to five "types". We currently are only using one type and the tags. The type is set up to be a very rough categorization of event types. We have defined the following:

- Family fun
- Field trip
- Fundraiser
- No school
- PTA meeting

We will almost certainly need changes to the taxonomy system. Please discuss proposed changes with Mark Stafford.

## Fundraiser considerations

One special type of event worth noting is a fundraiser. We partner with Give Lively to handle the actual fundraising. Give Lively makes it possible to embed the donation form directly in our website. While this is a great experience, due to technical limitations we recommend the following pattern for fundraiser events.

1. [Create a page for the fundraiser](managing-pages)
2. On the fundraiser page, add an HTML block and paste in the Give Lively embed code
3. Create an event for the fundraiser
4. [Assign the event the fundraiser event type](https://www.youtube.com/watch?v=0dod0m3Flvg&feature=youtu.be&list=PLqxoJioZHTBnfnHwWDYhqFNu8q9hKpvsZ&t=45)
5. [Set the event to an external link](https://www.youtube.com/watch?v=0dod0m3Flvg&feature=youtu.be&list=PLqxoJioZHTBnfnHwWDYhqFNu8q9hKpvsZ&t=208)

This pattern will have the following result: when a user sees the calendar event and clicks on it, the fundraiser page will open where the Give Lively donation form is embedded.
