var mouseX = 0, mouseY = 0,

            windowHalfX = window.innerWidth / 2,
            windowHalfY = 800,

            SEPARATION = 200,
            AMOUNTX = 1,
            AMOUNTY = 1,

            camera, scene, renderer, canvasBanner;

            init();
            animate();



            function init() {


                /*
                 *   Define variables
                 */
                var separation = 1000, amountX = 50, amountY = 50, color = 0x999999,
                particles, particle;

                canvasBanner = document.getElementById("canvasBanner");


                camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 800, 1, 10000 );
                camera.position.z = 300;

                scene = new THREE.Scene();

                renderer = new THREE.CanvasRenderer({ alpha: true });
                renderer.setPixelRatio( window.devicePixelRatio );
                renderer.setClearColor( 0x000000, 0 );   // canvas background color
                renderer.setSize( window.innerWidth, 800 );
                canvasBanner.appendChild( renderer.domElement );




                var PI2 = Math.PI * 2;
                var material = new THREE.SpriteCanvasMaterial( {

                    color: color,
                    opacity: 0.5,
                    program: function ( context ) {

                        context.beginPath();
                        context.arc( 0, 0, 0.3, 0, PI2, true );
                        context.fill();

                    }

                } );

                var geometry = new THREE.Geometry();

                /*
                 *   Number of particles
                 */
                for ( var i = 0; i < 150; i ++ ) {

                    particle = new THREE.Sprite( material );
                    particle.position.x = Math.random() * 2 - 1;
                    particle.position.y = Math.random() * 2 - 1;
                    particle.position.z = Math.random() * 2 - 1;
                    particle.position.normalize();
                    particle.position.multiplyScalar( Math.random() * 10 + 600 );
                    particle.scale.x = particle.scale.y = 5;

                    scene.add( particle );

                    geometry.vertices.push( particle.position );

                }

                /*
                 *   Lines
                 */

                var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: color, opacity: 0.3 } ) );
                scene.add( line );

                document.addEventListener( 'mousemove', onDocumentMouseMove );
                // document.addEventListener( 'touchstart', onDocumentTouchStart, false );
                // document.addEventListener( 'touchmove', onDocumentTouchMove, false );

                //

                window.addEventListener( 'resize', onWindowResize, false );

            }

            function onWindowResize() {

                windowHalfX = window.innerWidth / 2;
                windowHalfY = 800;

                camera.aspect = window.innerWidth / 800;
                camera.updateProjectionMatrix();

                renderer.setSize( window.innerWidth, 800 );

            }

            //

            function onDocumentMouseMove(event) {
                if (event.clientY < 80) {
                  event.preventDefault();
                  return
                }
                mouseX = (event.clientX - windowHalfX) * 0.05;
                mouseY = (event.clientY - windowHalfY) * 0.2;

            }

            function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                    mouseX = (event.touches[ 0 ].pageX - windowHalfX) * 0.7;
                    mouseY = (event.touches[ 0 ].pageY - windowHalfY) * 0.7;

                }

            }

            function onDocumentTouchMove( event ) {

                if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = event.touches[ 0 ].pageX - windowHalfX;
                    mouseY = event.touches[ 0 ].pageY - windowHalfY;

                }

            }

            //

            function animate() {

                requestAnimationFrame( animate );

                render();

            }

            function render() {

                camera.position.x += ( mouseX - camera.position.x ) * 0.1;
                camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.05;
                camera.lookAt( scene.position );

                renderer.render( scene, camera );

            }
