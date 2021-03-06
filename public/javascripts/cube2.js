
      // this function is executed on each animation frame
      function animate(){

        // render
        renderer.render(scene, camera);
 
        // request new frame
        requestAnimationFrame(function(){
            animate();
        });
      }
 
      // renderer
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
		renderer.setClearColor( 0x7ec0ee, 1); 
 
      // camera
      var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
      camera.position.z = 2000;
 
      // scene
      var scene = new THREE.Scene();
                
      // cube

		var dynamicTexture  = new THREEx.DynamicTexture(200,200);
		dynamicTexture.context.font	= "bolder 15px Verdana";
		dynamicTexture.drawText('Good Morning!', 10, 40, 'red');

      
      var material    = new THREE.MeshBasicMaterial({
    		map : dynamicTexture.texture
		})
		/*
      var cube = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), new THREE.MeshLambertMaterial({
        color: '#0000ff' 
      }));
      */
      var cube = new THREE.Mesh(new THREE.BoxGeometry(800, 600, 100), material);
      cube.overdraw = true;
      cube.rotation.x = Math.PI * 0.1;
      scene.add(cube);
		
      // add subtle blue ambient lighting
      var ambientLight = new THREE.AmbientLight(0x000044);
      scene.add(ambientLight);
      
      // directional lighting
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);
 
      // start animation
      animate();
      
      KeyboardJS.on('a', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(-200*scaleState, 0, 0) );
      	}, 
      	function(){
      	
      	});
      	
      	KeyboardJS.on('s', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, -200*scaleState, 0) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('w', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, 200*scaleState, 0) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('d', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(200*scaleState, 0, 0) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('x', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 200*scaleState) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('z', function(){
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, -200*scaleState) );
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('[', function(){
      		cube.applyMatrix( new THREE.Matrix4().multiplyScalar(2) );
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(50*scaleState, 50*scaleState, 50*scaleState) );
      		scaleState= scaleState*2;
      		
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on(']', function(){
      		cube.applyMatrix( new THREE.Matrix4().multiplyScalar(0.5) );
      		cube.applyMatrix( new THREE.Matrix4().makeTranslation(100*scaleState, 100*scaleState, 100*scaleState) );
      		scaleState = scaleState*0.5;
      		
      	}, 
      	function(){
     		
      	});
      	
      	KeyboardJS.on('k', function(){
     	// cube
    	 var cube2 = new THREE.Mesh(new THREE.BoxGeometry(
    	 2*cube.geometry.vertices[0].x*scaleState, 
    	 2*cube.geometry.vertices[0].y*scaleState, 
    	 2*cube.geometry.vertices[0].z*scaleState), 
    	 new THREE.MeshLambertMaterial({
   	     color: '#00ff00' 
   	   }));
      cube2.position.x = cube.position.x;
      cube2.position.y = cube.position.y;
      cube2.position.z = cube.position.z;
      cube2.overdraw = true;
      cube2.rotation.x = Math.PI * 0.1;
      scene.add(cube2);

      	}, 
      	function(){
     		
      	});
     