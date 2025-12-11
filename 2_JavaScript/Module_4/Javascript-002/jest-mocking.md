    JEST framework for testing and mocking


    Mocking allows you to separate the code you are testing from its dependencies.
    In other words, you can use mocking features to ensure that unit tests are self-contained.
    For example, you can test the front-end functionality of a web app by simulating data as if it came from
    a server, when in reality it came from the client.
    Mocking is particularly useful because very often web applications are developed by teams of developers and
    some of them work on the backend of a feature and others on the frontend.

    - REAL EXAMPLE OF MOCKING -
    Let's take the example where the team decides to create a new feature
    that lists the app's user directory on the frontend.
    The actual user data for this feature would come from the server.  
    But what would happen if a backend developer were a bit late in developing
    their part of the feature?  
    In that case, a frontend developer would be stuck waiting for 
    the backend developer to complete their work before the frontend code can be compiled.  
     
    With mocking you can avoid this bottleneck. 


    - SNAPSHOT TEST -
    Jest allows you to perform snapshot tests.
    Snapshot tests are used by developers to verify that
    there are no regressions in the DOM of our apps after making changes to the codebase.

    In simple words, imagine taking a photo (or "snapshot") of your application at a certain moment. This photo represents the current state of your user interface. 
    When you make changes to the code, you can compare the new version of your application with that original photo to see if there are any unwanted differences.

    - REAL EXAMPLE OF SNAPSHOT TEST -
    if you have an app that displays a list of products, you can take a "snapshot" of what the list looks like. If you later change the way products are displayed, the snapshot test will tell you if the appearance of the list has changed from the original photo. This helps you ensure that changes have not introduced visual or functional errors.
