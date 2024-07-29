## Feature Tests:  

### Terms and Conditions Handling:
* **Task:** Log in with Google OAuth and accept the terms and conditions. Then log out and log in again.  

* **Steps:**  
    * **1.1** Navigate to the login page.  
    * **1.2** Click on the "Log in with Google" button.  
    * **1.3** Complete the authentication using Google credentials.  
    * **1.4** Read the terms and conditions presented in the modal.  
    * **1.5** Click the "Accept" button to agree to the terms and conditions.  
    * **1.6** Verify successful login and redirect to the homepage.  
    * **1.7** Log out from the application.  
    * **1.8** Repeat steps **1.1** to **1.3** to log in again.  

* **Expected Outcome:**  
    * After accepting the terms and conditions during the initial login, subsequent logins should not prompt the user to view the terms and conditions modal again.  
    * The user should be logged in directly without encountering the terms and conditions modal, indicating that the acceptance status is remembered for future logins.  

<hr>

### Interacting with Multimedia Players:
* **Task:** Play a song on the SoundCloud playlist widget.  
* **Steps:**  
    * **1.1** Navigate to the Music section.  
    * **1.2** Click on a song in the playlist widget.  
* **Expected Outcome:**  
    * User can click on a song in the playlist widget, and the song starts playing without any issues.
<hr>  

* **Task:** Play a You Tube video on the React-Player widget.  
* **Steps:**  
    * 1.1 Navigate to the New section.  
    * 1.2 Click the play button on the You Tube video.  
* **Expected Outcome:** User can click the play button on the You Tube video, and the video starts playing without any issues. User should also be able to pause and stop the video as well as control the volume.

    <hr>

* **Task:**: Visualize a song title and play that song in the Thoughts section.  
* **Steps:**  
    * 1.1 Navigate to the Thoughts section.  
    * 1.2 Hover over a planet to visualize the song title.  
    * 3.3 Click on the planet to play the corresponding song.  

* **Expected Outcome:**   
    * User can see a song title when hovering over a planet in the Thoughts section, and when the user clicks on the planet, that titled song should play.  
    * They should be able to pause the song by clicking the planet again or play a different song by clicking on a different planet.  

<hr>

### Commenting and Rating:
* **Task:** Leave a comment for the artist and rate user experience with the website using the star rating system.  

* **Steps:**
    * 1.1 Navigate to the Comment section.
    * 1.2 Type a comment in the textarea box.
    * 1.3 Click on a star to rate the user experience with the website.  

* **Expected Outcome:**  
    * User can submit a comment and rating successfully.  
    * The comment should be stored for the artist to view at his convenience.   
    * The rating should be recorded accurately and displayed alongside the comment.   
    * Additionally, the user should receive a confirmation message confirming the successful submission.  
<hr>

### Viewing Artist Contact Info:
* **Task:** Click on the "Contact Info" button to view the artist's contact information.
* **Prerequisite:** Ensure the user is logged in to their account.
**Steps:**  
    * 1.1 Navigate to the footer section of the website.  
    * 1.2 Locate and click on the "Contact Info" button.  

* **Expected Outcome:** User can access the artist's contact information, which is displayed accurately and clearly.  
<hr>

### Mobile View Specific Tests:
**Responsive Login and Navigation:**
* **Task:**: Ensure login page and main navigation are responsive and usable on mobile devices.  

* **Steps:**  
    * 1.1 Access the website on a mobile device.
    * 1.2 Observe that the login fields and buttons are appropriately sized and accessible.
    * 1.3 Navigate through various pages using the main navigation menu.  
* **Expected Outcome:**  
    * All interactive elements should be easily clickable, and text should be readable without needing to zoom in.   
    * Navigation between pages should be smooth and error-free.  

<hr>

### Mobile Multimedia Interaction:
* **Task:** Test multimedia widgets (SoundCloud, YouTube) on mobile devices for usability.
* **Steps:**  
    * 1.1 On a mobile device, navigate to the Music section and try playing a song.  
    * 1.2 Navigate to the New section and play a YouTube video.  
    * 1.3 Attempt to use multimedia controls like play, pause, and volume.  

* **Expected Outcome:**  
    * Widgets should load and function correctly without overlapping UI elements.   
    * Controls should be usable, and media should play smoothly.  

    <hr>

### Terms and Conditions Modal on Mobile:
* **Task:**: Check the display and interaction of the terms and conditions modal on mobile.  

* **Steps:**  
    * 1.1 Log in using a mobile device.  
    * 1.2 Observe the presentation of the terms and conditions modal.  
    * 1.3 Try scrolling through the terms and accepting them.  

* **Expected Outcome:**  
    * The modal should be fully visible and scrollable on a small screen.   
    * The "Accept" button should be easily clickable.  

<hr>

### Comment and Rating Submission on Mobile:
* **Task:**: Ensure the comment and rating system is functional and user-friendly on mobile.  

* **Steps:**  
    * 1.1 Navigate to the Comment section on a mobile device.  
    * 1.2 Enter a comment and select a star rating.  
    * 1.3 Submit the feedback.  

* **Expected Outcome:**  
    * Text input and star selection should be easily interactable on touch screens. 
    * Confirmation of submission should be clearly visible.