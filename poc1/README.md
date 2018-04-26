# POC: Power BI Embedded using Angular library
This POC embeds a Power BI report using a 3rd party open source Angular library: PowerBI-Angular2. For details, refer https://github.com/diego-d5000/PowerBI-Angular2.

Steps to view a Power BI report in this app:
1. Note the report id and group/workspace id from Power BI service portal.
2. Open src/app/app.component.html.
2. Update report id in the "id" field and "embedUrl" field.
3. Update group id in the "embedUrl" field.
4. Update access token in the "accessToken" field.
