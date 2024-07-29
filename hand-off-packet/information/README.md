<div style="display: flex; align-items: flex-start; justify-content: center;">
  <img src="../../images/logo100.png" alt="Bam Logo" width="150">
</div>

<div style="display: flex; align-items: flex-end; justify-content: center;">
  <img src="../../images/sig.png" alt="Bam Signature" width="100px" align="center" /> 
</div>

<h1 align="center">Useful Information</h1>

## Table of Contents
1. [Login](#login)
2. [DNS Records](#dns-records)
3. [Dependencies](#dependencies)
4. [Environment Variables](#environment-variables)
5. [Images](#images)
6. [Recommended](#recommended)
7. [Questionnare](#questionnare)

## Login:

* **Platform/Service:** User Engagement Features on Bamvsthewrld.com  
* **Login Method**: Google Authentication  
* **URL**: [Homepage - bamvsthewrld.com](https://bamvsthewrld.com)

### Login Process:
1. **Navigate to the website** at [https://bamvsthewrld.com](https://bamvsthewrld.com).
2. **Click on the 'Login with Google' button**.
3. **You will be redirected to Google's login page**. Enter your Google account email and password.
4. **Complete two-factor authentication** if it is enabled for your account.
5. **Accept the terms and conditions** to proceed.
6. **Access features** such as commenting, rating, and viewing artist contact information.

### Notes:
- If you need assistance during the login process or have questions about your user privileges, please contact [tishd7@hotmail.com](mailto:tishd7@hotmail.com). 

<hr>

## DNS Records:

Provided below is a clear and comprehensive overview of the DNS settings for your domain. It's designed to help you understand how your domain is configured and to assist with any future transitions or troubleshooting efforts.

- **Record Type**: The type of DNS record (e.g., A, CNAME, MX, etc.)
- **Host**: The hostname for the record (e.g., @, www, mail).
- **Value**: The value or IP address associated with the record.
- **TTL**: Time to live, which indicates how long the server should cache the information. Default is usually 3600 seconds (1 hour).
- **Purpose**: A brief explanation of what each record is used for.

### DNS Records

| Record Type | Host | Value                     | TTL  | Purpose                                               |
|-------------|------|---------------------------|------|-------------------------------------------------------|
| A           | @    | 216.24.57.1               | 3600 | Points the root domain to Render's load balancer.     |
| CNAME       | www  | heroku-bam.onrender.com   | 3600 | Directs 'www' subdomain to the main site hosted on Render. |

### Notes

- **A Record**: This record is crucial for directing traffic from your root domain (e.g., bamvsthewrld.com) to the IP address specified, which is the server where your site is hosted.
- **CNAME Record**: The CNAME record maps your www subdomain to the fully qualified domain name (FQDN) of your hosting service, ensuring www.bamvsthewrld.com resolves to your main site.

This setup ensures that both your root domain and www subdomain properly direct traffic to your hosted site, providing seamless access to your web content.

<hr>

## Dependencies

List of essential libraries and frameworks required for the operation of the Bamvsthewrld project. These dependencies are necessary for the application to function properly in a production environment.

### **Frontend Dependencies (Client-Side)**
### **Required Dependencies:**
* **React and React-DOM:** Core libraries for building user interfaces with React.  

* **Axios:** Used for making HTTP requests to external resources and APIs.  

* **React Router DOM:** Handles routing for the application, enabling navigation between different components without reloading the page.  

* **Styled Components:** Allows for CSS in JS, providing scoped styles without side effects.  

* **React Scripts:** Includes a set of scripts from the Create React App setup, facilitating project setup and configuration.  

### **Optional (Specific Use Cases):**
* **@react-three/fiber and @react-three/drei:** React renderer for three.js with additional hooks and abstractions for 3D rendering.  

* **React Player:** A flexible player component that can handle various media types including video from YouTube, Vimeo, and more.

* **React Icons:** Provides accessible icons for React applications, using popular icon libraries.  

* **Framer Motion:** A powerful library for animations in React applications, used to enhance UI/UX with motion.  

* **React Scroll:** Facilitates animating vertical scrolling within the application.  

* **React Rating Stars Component:** Allows users to get and post ratings using a customizable star rating component.
* **React Img Mapper:** Provides interactive areas on images that can trigger actions or links.  

* **@react-oauth/google:** Facilitates OAuth authentication with Google, simplifying user logins.  

### **Backend Dependencies (Server-Side)**
### **Required Dependencies:**
* **Express:** Fast, minimalist web framework for Node.js, used to build the server.  

* **Mongoose:** ODM for MongoDB, used for modeling and managing database interactions in an asynchronous environment.  

* **Dotenv:** Loads environment variables from a .env file, securing app configuration.  

* **CORS:** Middleware to enable CORS (Cross-Origin Resource Sharing) for handling API requests from different origins.  

* **Express-session:** Manages user sessions, essential for user authentication flows.  

* **Passport and Passport-Google-OAuth20:** Authentication middleware for Node.js, supports login with Google.  

* **Morgan:** HTTP request logger middleware for Node.js, used for monitoring and debugging.  

* **jsonwebtoken:** Implements JSON Web Tokens for secure transmission of information across the network.  

* **Google-auth-library:** Provides Google’s OAuth2 client for Node.js applications.  

* **Connect-mongo:** Stores session data in MongoDB, maintaining session states across server restarts.  

* **Cloudinary:** Cloud service for storing, processing, and managing images and videos.  

### **Optional (Dev-specific tools):**
* **Nodemon:** Utility that monitors for changes in your source and automatically restarts the server.  

<hr>

## **Environment Variables**
1. **Identify Required Variables:**  

  * Begin by listing all the environment variables your application requires. This list might include database URLs, API keys, secret tokens, and other sensitive data needed for your application to function properly.  

2. **Gathering Information:**
  * **API Keys and Credentials:**  
  Obtain these from the respective service providers. For example, if you use Cloudinary, log in to your Cloudinary dashboard to find your API key and API secret.
  * **Database URLs:** These are usually obtained from your database host or by configuring your own database server.  

  * Other Service Variables: Similar to API keys, any other service your application integrates with will likely provide these through their user dashboards.  

3. **Creating Secure Backups:** Store these variables securely, perhaps in a password manager, especially if they are sensitive.  

## Setting Up the .env File  
1. **Create a .env.example File:**  

  * Navigate to the root directory of your project.  

  *Create a new file named ```.env.example```. In this file, list all the environment variables your application uses, but replace the sensitive values with placeholders. For example:
```makefile
Copy code
DATABASE_URL=
API_KEY=
CLOUDINARY_URL=
API_URL=
REDIRECT_URL=
JWT_SECRET_KEY=
FRONTEND_URL=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
NODE_ENV=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SESSION_SECRET=
```
## **Instructions for Creating a .env File:**

  * Copy the ```.env.example``` file and rename the copy to ```.env```.
  * Replace the placeholder values in the ```.env``` file with the actual values. This should be done in a secure environment to prevent leakage of sensitive information.  

  ### **Load Environment Variables in Your Application:**  

  * You can use the dotenv package to load the variables.  
   **Install it via npm:**  

```bash
Copy code
npm install dotenv
```
  * At the top of your main file ```server.js```, add the following line to load the ```.env file```:  

```javascript
Copy code
require('dotenv').config();
```
  * Now, you can access the environment variables anywhere in your application using ```process.env.VAR_NAME```, where ```VAR_NAME``` is the name of your variable.
### **Security Reminder:**
  * Never commit the```.env``` file to source control. Ensure it is included in your ```.gitignore``` file to prevent it from being uploaded to your version control system.
  * Share the actual ```.env``` file or the sensitive values it contains securely with only those who need it.

## **Images**
### **Overview**
Cloudinary is a cloud-based service that provides solutions for managing web and mobile media assets. It is utilized in this project to host and manage all the images, optimizing performance and scalability.


  * **Location in Project:** Images are referenced within the React components using Cloudinary URLs. These are configured to fetch images dynamically based on the application's requirements.  

  * **API Usage:** Examples of API calls made to Cloudinary (for uploading, retrieving, and deleting images) are documented in the utils/cloudinary.js module.

## Recommended  

 **Complementary Services I Recommend:**  
 
For additional services that align with your business goals and needs, here are some enhancements I can provide:

**Marketing Tool Integration:**  
* I suggest incorporating advanced marketing tools that can help automate your interactions and streamline your processes. This integration can enhance the utility and efficiency of your new website.

* **Marketing Automation:** I can implement automation sequences that manage customer engagement and follow-ups automatically. This reduces your workload and increases operational efficiency, allowing you more time to focus on strategic activities.  

* **SEO Optimization:** I offer tailored SEO services designed to boost your website's visibility and improve search engine rankings. This can lead to increased traffic and potential sales, significantly impacting your business growth.  

<hr>

## Questionnaire

### **General Questions**

1. Overall, how do you feel about the website?

2. Are there any sections of the website you feel could be improved?  

### **Technical Issues**
3. Have you encountered any technical issues or bugs?  
 Please describe them.

4. How has the website performed on different devices and browsers?

- [ ] Excellent  
- [ ] Good 
- [ ] Fair  
- [ ] Poor  

### **Usability**
5. Is there any functionality on the website that you find confusing or difficult to use?

6. How do you rate the ease of navigating the website on a scale from 1-10 with 1 being the lowest and 10 being the highest?

### **Content**
7. Is there any content that needs to be revised or updated?

8. Are the call-to-action buttons and links functioning as you expected?  
(Yes/No)

### **SEO and Analytics**
9. Have you noticed any issues with the website's visibility on search engines?  
(Yes/No; if yes, please specify)  

10. Do you have access to all analytics tools, and are they providing the expected information?  
(Yes/No; if no, what information is missing?)  

### **Additional Support**
11. What additional support or training would you like to receive?

12. Do you have any other concerns or feedback you would like to discuss?
