# CITATIONS
    *[https://html.com/attributes/input-pattern/)
    * 11/29/2022
    * Used for code for required pattern input, [A-Za-z0-9]+
    * Source Code
    * html.com
   
     *[https://www.w3schools.com/tags/att_input_pattern.asp)
    * 11/29/2022
    * Used to learn about html attribute patterns / validation
    * Source Code
    * w3schools
    
     *[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)
    * 11/29/2022
    * Used to learn about html attribute patterns / validation
    * Source Code for "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    * developer.mozilla.org

     *[https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)
    * 11/29/2022
    * Used to learn about html attribute patterns / validation
    * Source Code
    * developer.mozilla.org


# Steps to running p-frontend on flip server
    # Make sure running node v16.5.0 or similar

    # npm install pm2 serve -g
    # npm run build
    # pm2 serve build 11784 --spa   # or whatever port number

# Steps to update once running
    # First update and save file the file
    # run 'npm run build'
    # should appear updated


# pm2 helpful commands
    # pm2 list  --shows all instances running on servers
    # pm2 start  -- start an instance back up
    # pm2 stop -- stop an instance
    # pm2 kill -- deletes and restarts pm2  -- running this fixed a bug where I couldn't get my project to run



