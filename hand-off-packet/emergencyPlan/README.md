<div style="display: flex; align-items: center; justify-content: center;">
  <img src="../../images//bamsignature.png" alt="Trapstar Bam Logo" width="150">
</div>

<div style="display: flex; align-items: center; justify-content: center;">
  <img src="../../images/logo.png" alt="Bam Signature" width="100px" align="center" /> 
</div>
    <h1 align="center">Disaster Recovery and Emergency Response Plan</h1> 

### Instructions for Restarting Heroku Server
1. **Install Heroku CLI:**  

* If you haven't already installed the Heroku CLI, you can download it from Heroku's official site. Follow the installation instructions relevant to your operating system.  

2. **Login to Heroku CLI:**  

* Open your terminal or command prompt and log in to your Heroku account using the CLI:
```bash
Copy code
heroku login
```
* This command opens a web browser to log in. Follow the prompts to complete the login process.  

3. **Restart the Server:**  

* You can restart all your app’s dynos (server processes) with the following command:
```bash
Copy code
heroku restart -a bamvwrld
```  
 This command will stop all the running dynos and start them again, effectively restarting your server.If you want to restart a specific dyno, use:  
```bash
Copy code
heroku restart web.1 -a bamvwrld
```
Here, web.1 is the identifier of the dyno you wish to restart.  

### Troubleshooting Tips
**Check Dyno Status:**  

* After restarting, you can check the status of your dynos to ensure they are running correctly:

```bash
Copy code
heroku ps -a bamvwrld
```

### View Logs:
If you encounter issues after restarting, you can view the logs for clues on what went wrong: 

```bash
Copy code
heroku logs --tail -a bamvwrld
```
This command shows real-time logs from your application.  

**Scale Dynos:**  

* If restarting doesn’t resolve the issues, consider whether your application might need more resources:  
```bash
Copy code
heroku ps:scale web=2 -a bamvwrld  
```
* This command increases the number of web dynos to two, providing additional capacity.

