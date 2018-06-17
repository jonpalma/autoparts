<?php include "header.php"; ?>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <!--/* BANNER */-->

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div class="banner" id="banner">
        <div class="vertical-align">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-8 col-sm-10">
                        <h1 class="bold text-white">Surtimos para toda la República Mexicana</h1>
                        <button>Cotizar ahora&nbsp;<i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <!--/* NOSOTROS */-->

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div class="nostros spacing" id="nosotros">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-7">
                    <h2 class="section-title">
                        Surtimos para toda<br>
                        la <span class="bold">República Mexicana</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div class="col-md-5 d-lg-block d-md-block d-none">
                    <img class="embed-responsive" src="img/decor/1.jpg" alt="Pistón">
                </div>
            </div>
        </div>
    </div>
    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

    <!--/* SERVICIOS */-->

    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
    <div class="servicios big-spacing relative-container" id="servicios">
        <div class="container">
            <h2 class="bold text-white">Servicios</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="img-container" style="background: url(img/servicios/1.jpg) no-repeat center center">
                        <span class="text">Entrega</span>
                        <span class="lines-decor"></span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="img-container" style="background: url(img/servicios/2.jpg) no-repeat center center">
                        <span class="text">Nuevas</span>
                        <span class="lines-decor"></span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="img-container" style="background: url(img/servicios/3.jpg) no-repeat center center">
                        <span class="text">Usadas</span>
                        <span class="lines-decor"></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- HEXAGON BACKGROUND SVG -->
        <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
            <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(3) translate(2) rotate(0)">
                    <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" id="hex" />
                    <use xlink:href="#hex" x="25" />
                    <use xlink:href="#hex" x="-25" />
                    <use xlink:href="#hex" x="12.5" y="-21.7" />
                    <use xlink:href="#hex" x="-12.5" y="-21.7" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
    </div>
    <div class="autopartes spacing" id="autopartes">
        <div class="container">
            <h2 class="section-title">Auto<span class="bold">partes</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
<?php include "footer.php"; ?>