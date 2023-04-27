 alexius-branch
# Project X App

## User Story
## AS A traveler
## I WANT to see gas stations and their prices in my current location
## SO THAT I can compare and save money on gas

## Acceptance Criteria
## GIVEN a homepage with icons for my locations and gas stations near me on a map
## WHEN I click on a gas station icon 
## THEN I am presented with the stations gasoline prices, address, name, and directions
## WHEN I click on the directions icon the directions to the station are now in route on my phone
## THEN I click on the profile icon it will navigate me to my profile with my rewards point, home address, and drive history
## 










<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hello Bulma!</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
  <link rel="stylesheet" href="style.css" />
  <link href="https://atlas.microsoft.com/sdk/javascript/mapcontrol/3.0.0-preview.6/atlas.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v7.3.0/ol.css">



</head>


<body>
  <section class="section">
    <div class="container">
      <h1 class="title">GasZone</h1>
    </div>
  </section>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io"> </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="field has-addons">
          <div class="control">
            <input class="input" type="text" placeholder="Zipcode , City etc.." />
          </div>
          <div class="control">
            <a class="button is-info"> Search </a>
          </div>
        </div>

        <a class="navbar-item"> Near Me </a>

        <a class="navbar-item"> Rewards!</a>

        <a class="navbar-item"> Roadside Assistance</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div>
  </div>

  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>

  <div id="myMap" style="position:relative;width:100%;min-width:290px;height:600px;"></div>

  <div style="position:absolute;top:15px;left:15px;border-radius:5px;padding:5px;background-color:white;">
    <input type="button" value="Play" onclick="animation.play()" title="Play" />
    <input type="button" value="Pause" onclick="animation.pause()" title="Pause" />
    <input type="button" value="Stop" onclick="animation.stop()" title="Stop" />
    <input type="button" value="Reset" onclick="animation.reset()" title="Reset" />
    <br /><br />
    Follow: <input id="followSymbol" type="checkbox" onclick="toggleFollow()" title="Follow" /><br />
    Follow offset: <input id="followOffset" type="checkbox" onclick="toggleFollowOffset()"
      title="Follow offset" /><br />
    Loop: <input id="loopAnimation" type="checkbox" onclick="toggleLooping()" title="Loop" /><br />
    Reverse: <input id="reverseAnimation" type="checkbox" onclick="toggleReverse()" title="Reverse" />
  </div>

  <fieldset style="width:calc(100% - 30px);min-width:290px;margin-top:10px;">
    <legend>Animate along a route path</legend>
    This sample shows how to smoothly animate a symbol along a route path taking into consideration timestamps for each
    point in the route path.
    This sample also includes controls and options for the animation.
    This sample uses the open source <a href="https://github.com/Azure-Samples/azure-maps-animations" target="_blank"
      title="Azure Maps Animation module">Azure Maps Animation module</a>
  </fieldset>

  <script src="https://atlas.microsoft.com/sdk/javascript/mapcontrol/3.0.0-preview.6/atlas.min.js"></script>
  <!-- <script src="/lib/azure-maps/azure-maps-animations.min.js"></script> -->
    <script src="script.js"></script>

</body>

</html>