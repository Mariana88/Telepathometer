# Telepathometer
An application which allows people to identify their events of telepathy with one another

# Getting Started

# Utilizing the application
Select a person by entering their full name or email. Enter the date and time of your thought about this person. Enter the subject of the thought. If the other person has entered a thought about you at the same date/time or about the same subject of a thought of yours about them, both of you will see the telepathy event.

All information you enter here is primarily visible only to you. Only when a "telepathy event" happens and the other person also thinks about you, either at the same time or over a similar topic, both of you will be able to see the information related to only those specific thoughts which were part of the event.

# General System Behaviour, Users and User Stories

## Users

* A telepathic person (who would like to experience their own events of telepathy)
* A researcher of telepathy (who would like to analyse how telepathy occurs and plays a role on a group of people or community)

## System Behaviour and User Stories

### General System Behaviour

__The system should be able to:__

* Create a Telepathy Event of the following types and acording to the following criteria:

 * Same Time events
 Two people thought of each other within a same given timeframe
 * Same day
 Two people thought of each other within the same span of 24h
 * Quantity
 Two people thought about each other a given minimum amount of times within a given same timeframe
 * Same Mood
 Two people have thoughts about each other associated with the same feelings a given minimum amount of times within a given timeframe

### Telepathic Person Stories

__As a Telepathic Person I can:__

* Register in the application to store my personalized data
 * Enter and store the following data:
  * first and last name
  * email
  * facebook profile
  * profile picture
  * preferred timezone
 * Log in as I return to the application
 * View and manipulate my stored data as I return to the application
 * Delete my account

* Be ensured that my personal data will be protected
 * Be informed that data will never be sold or made available to any third party
 * Be informed that data will never be used for any purpose other than their personal use or research
 * Be informed that anonymous data might be used for research (their identity will always be protected)

* Create a telepathic message (aka "thought") about another person
 * Enter identification details of the person involved in the telepathy message
  * First and last name
  * email(1-n)
  * facebook profile
 * Select a person from user base (if intended person is already a registered user)
 * Indicate the date and time (with timezone) of the telepathic message
 * Add details about my telepathic message
  * Add a topic (i.e. what the "tought" was about) (in text)
   * Select from my previously defined topics (should this be only from one's personal topics or shd we make topics public? e.g. "LulaLivre" or "Kendrik Lamar concert" or "climate change". Should the user have the option to make it a "public topic"?)
  * Add a written description of the thought (could be a small or large text)
  * Add a feeling associated with this tought (i.e. how I felt when I had this thought about this person)
   * Select from previously defined feelings (mine and general)
  * Indicate (in text) what was the trigger for this thought (i.e. what made me think of this person at this point in time)
  * attach annecdotal information about the telepathc message (images, audio, videos, links...)

* Invite a person to join the application
 * Invite a group of people to join the application at once
 * Invite a person to share telepathic messages with me (is this needed? how is it different than just inviting to the app? rethink...)
* Share the application to my network such that they would be "generically invited"

* View my previously created telepathic messages (and all its details)

* Modify my previously created telepathic messages
 * modify message date and time
 * modify message contents 
  * Update (or delete if pertains) thought, topic, sentiment, trigger
  * attachments - (add or remove)

* Delete my previously created telepathic messages

* View a telepathy event when it occurs
 * view who the person involved in the event is
  * be able to navigate to the person's profile
 * view which telephatic messages were involved in the event
  * be able to navigate trough the content of each specific message involved

### Telepathy Researcher Stories

tbd

# Functional Requirements

Requirement Id | Description | Related User Story | Targeted Version
--- | --- | --- | ---
A | User Management
A.1 | Add user (first and last name - email[2](#[2]) - password) | | 0.1
A.1.1 | A user must be required to verify email in order to register | |
A.2 | Login | | 0.1
A.3 | Update profile info (first/last name, email, password) | | 0.1
A.4 | Display profile info | | 0.1
B.1 | Add message | | 
B.1.1 | Add target person[1](#[1]) | | 
B.1.1.1 | Add target person (by name and/or email) | |
B.1.1.2 | Add target person by selecting from existing user base | |
B.1.2 | Add message date | | 
B.1.3 | Add message time | | 
B.1.3.1 | Add timezone specific message time | |


# Release Plan

Version | Added Functionality | ETA
--- | --- | ---
0.0 | User management from console | 29/04/2018
0.1 | User management in console and UI with MVC architecture, persisting to JSON file| 11/05/2018
1.0 | Teleathic message editing from console |
1.1 | Telepathic message editing from UI | 
2.1 | Telepathy event calculation |
2.2 | Telepahy event display in UI

# General Specs

##[1] 
A target person is the person who a telepathic message (aka "thought") is about.
##[2]
An email must be unique to 1 single user. Only 1 user per email allowed.

# Project TO DOs

* Transform test scripts into tiny tests (or some other form of automatically executable tests)
