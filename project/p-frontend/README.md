# CITATIONS

    * Source:(https://github.com/cback-CS290/Exercise-App---MERN-Stack-Demonstration)
    * Date: 10/01/2022
    * Scope: Source Code for building Pages & Components in P-Frontend
    * Originality: Based

    * Source:(https://reactjs.org/docs/create-a-new-react-app.html)
    * Date: 10/01/2022
    * Scope: Used to learn about general setup of a React App
    * Originality: Adapted, Informational

    * Source:(https://www.tablesgenerator.com/html_tables#)
    * Date: 10/01/2022
    * Scope: Tables - Used to create barebones structure of tables
    * Originality: Adapted

    * Source:(https://www.freecodecamp.org/news/build-dynamic-forms-in-react/)
    * Date: 10/01/2022
    * Scope: Booking Form - used to learn how to create adaptive form fields
    * Originality: Adapted

    * Source:(https://www.youtube.com/watch?v=_S2GKnFpdtE&ab_channel=PedroTech)
    * Date: 10/01/2022
    * Scope: Connecting React App to backend, backend to server side
    * Originality: Adapted
    
    * Source: (https://html.com/attributes/input-pattern/)
    * Date: 11/29/2022
    * Scope: Form inputs - required pattern input, [A-Za-z0-9]+
    * Originality: Adapted
   
    * Source: (https://www.w3schools.com/tags/att_input_pattern.asp)
    * Date: 11/29/2022
    * Scope: HTML sections - Used to learn about html attribute patterns / validation
    * Originality: Adapted
    
    * Source: (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)
    * Date: 11/29/2022
    * Scope: Forms - Used to learn about html attribute patterns & validation / Source Code for "[0-9]{3}-[0-9]{3}-[0-9]{4}"
    * Originality: Copied

    * Source: (https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern)
    * Date: 11/29/2022
    * Scope: Forms - Used to learn about html attribute patterns / validation
    * Originality: Adapted


# Steps to running p-frontend on flip servers
    # Make sure running node v16.5.0 or similar
    # npm install pm2 serve -g
    # npm run build
    # pm2 serve build 11957 --spa   # or whatever port number

# Steps to update once running
    # First update and save file the file
    # run 'npm run build'
    # should appear updated

# pm2 helpful commands
    # pm2 list  --shows all instances running on servers
    # pm2 start  -- start an instance back up
    # pm2 stop -- stop an instance
    # pm2 kill -- deletes and restarts pm2  -- running this fixed a bug where I couldn't get my project to run
