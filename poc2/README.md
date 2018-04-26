# POC: Power BI Embedded using JavaScript library
This POC embeds a Power BI report using Microsoft's Power BI JavaScript library. For details, refer https://github.com/Microsoft/PowerBI-JavaScript.

Steps to view a Power BI report in this app:
1. Note the report id and group/workspace id from Power BI service portal.
2. Open src/app/app.component.ts.
3. Update report id and group id in the getReports() function:
  * Update report id in the "id" field and "embedUrl" field.
  * Update group id in the "embedUrl" field.
4. Update access token in the "accessToken" field.
