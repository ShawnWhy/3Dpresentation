

var APIKey= "61fec83c505722615ff089ec90d63d94";

var backgroundColor;
const information = {
    Altria:{
        information:"Altria is one of the largest corporations in the United States. They are the former Philip Morris and has now rebranded themselves to focus on tobacco adjacent and tobacco-related products.  They are also the parent company of a few alcohol-related businesses and are involved in the newly-legalized cannabis business. ",
        subinformation:{
            phish:"Altria employees receive a multitude of suspicious email every day.  We screen through each of the email deemed suspicious by the employees and determine if they are legitimate or are illegal phishing efforts. the messages are run through a series of scanning tools and are evaluated with its context. Dmarc is also used to determine the veracity of the email sender information."

        }
    },
    HamiltonBeach:{
        information:"Hamilton Beach is one of the largest Manufacturer and distributor of home appliance and related products in the United States. Its headquarters is located in the City of Richmond and one of its main distribution centers is in the town of Olive Branch, MS.  It also has branches in NC, Mexico City and Canada.",
        subinformation:{
            support:"Hamilton Beach uses AS400, HighJump and Epicore to manage and record all transactions. there are frequent errors that are inherent in the process of machine and human operation.  We escalate these issues to the appropriate technician.  We also help smooth over the operational errors of HBB employees by trouble shooting software errors, Active directory errors, and hardware errors in the first tier.",
            monitor:"We also help monitor the servers that runs the HBB database.  As they frequently run into errors and outages.",
        }
    },
    Teamwork:{
        information:"We perform website maintenance and hosting for various businesses which include adding features and fixing operational errors.",
        subinformation:{
            wordpress:"WordPress is an extremely flexible content management system that runs on php.  it is extremely customizable and can be augmented with various add-ons (such as woocommerce) to perform various back-end operations.",
            Joombla:"Joombla is a CMS that is a little less coding oriented and less customizable than WordPress. ",
            SiteCore:"SiteCore is a CMS based off the ASP.net framework.  Instead of Php, it runs off the C# language for its backend.  Sitecore's advantage over the other two CMS seems to be its ability to delegate  different levels of credentials for the developers to have different levels of flexibility and control over the content and design of the webpages.",
        }
    },
    Sycom:{
        information:" Sycom is a IT firm that manages the infrastructure of various businesses throughout the United States. Their services include customer/employee user interfaces and experience, Networking and Cyber security.",
        subinformation:{
            Ninja:"Ninja is a tool that we use to receive alerts from connected devices. Ninja also displays a overview of the status of each monitored device, including a list of running applications, network connectivity and storage space.",
            SolarWind:"SolarWind is also a tool that we use to monitor devices and receive alerts from. All of the monitored devices are listed in a branching diagramatic fashion; and each of the devices can be easily navigated to, to observe its status",
            ITGlue:"It glue is a application used to organize and store information on each of the monitored devices.  We use it to access important credentials inorder to access various virtual machines and Vsphere"

        }

    }
}

window.addEventListener("DOMContentLoaded",function(){

    // ecran.material.diffuseTexture = new BABYLON.VideoTexture("video", "textures/babylonjs.mp4", scene, true);
    var canvas= document.getElementById("canvas")
    var engine = new BABYLON.Engine(canvas,true);

    var createScene = function(){
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(0,0,0);
        // var camera = new BABYLON.FreeCamera("camera1", 
        // new BABYLON.Vector3(6,10,-20),scene);
        // camera.setTarget(BABYLON.Vector3.Zero());
        // camera.attachControl(canvas,true);
        // camera.keysUp.push(87);
        // camera.keysDown.push(83);
        // camera.keysLeft.push(65);
        // camera.keysRight.push(68);

        engine.enableOfflineSupport = false;
        
        var imageMaterial =new BABYLON.StandardMaterial("imageMaterial",scene);
        imageMaterial.emissiveColor = new BABYLON.Color3(1,.3,0);
        var sphere = BABYLON.Mesh.CreateSphere("sphere",20,20,scene);
        sphere.position= new BABYLON.Vector3(20, 20, 4);

        var camera = new BABYLON.UniversalCamera("UniversalCamera",
        
        BABYLON.Vector3(0,0,0),scene);
        camera.position = new BABYLON.Vector3(1, 2, 0);
        // camera.attachControl(canvas,true);



        

        

        // var screenmaterial = new BABYLON.StandardMaterial("screenMaterial",scene)
        // var videoTexture1 = new BABYLON.VideoTexture("video", "video.mp4", scene, true);
        // screenmaterial.diffuseTexture= videoTexture1

        // scene.onPointerDown = function () {
        //     videoTexture1.video.play();
        // };

      
        // var light = new BABYLON.SpotLight("spotlight", new BABYLON.Vector3(0,10,2), new BABYLON.Vector3(0,-1,0),
        // BABYLON.Tools.ToRadians(45),0.1,scene)
        //         light.diffuse = new BABYLON.Color3(0,.1,.3);
        var material = new BABYLON.StandardMaterial("material1",scene)
        material.diffuseColor =new BABYLON.Color3(0,1,.2);
        // material.emissiveColor = new BABYLON.Color3(1,.3,0);
        material.specularColor = new BABYLON.Color3(0,0,1);
        material.alpha = .0
        // material.wireframe=true;
        sphere.material=imageMaterial;



        sphere.isPickable=true;

        sphere.actionManager = new BABYLON.ActionManager(scene);
        sphere.actionManager.registerAction(
            new BABYLON.SetValueAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger, 
                    parameter: ""
                }, 
                sphere,
                "scaling",
                new BABYLON.Vector3(2, 4, 1.2)
            )
            
        );
     

    
    var camera2 = new BABYLON.ArcRotateCamera("Camera3", 0, 0, 0, new BABYLON.Vector3(0, 45, 0), scene);

    camera2.setPosition(new BABYLON.Vector3(0, 5, -.5));
                    // camera2.setTarget(AltriaLogo);
   var camera3 = new BABYLON.ArcRotateCamera("Camera3", 0, 0, 0, new BABYLON.Vector3(0, 45, 0), scene);

    camera3.setPosition(new BABYLON.Vector3(1, -2.5, .8));

    var camera4 = new BABYLON.ArcRotateCamera("Camera4", 0, 0, 0, new BABYLON.Vector3(0, 45, 0), scene);

    camera4.setPosition(new BABYLON.Vector3(-1, -7.5, 2.5));

    var camera5 = new BABYLON.ArcRotateCamera("Camera4", 0, 0, 0, new BABYLON.Vector3(0, 45, 0), scene);

    camera5.setPosition(new BABYLON.Vector3(0, -12, -0));

    
             
            BABYLON.SceneLoader.ImportMesh("","","cagebar2.gltf",scene,
        
           function(newMeshes){

            $(".loading").css("display","none");
               newMeshes.forEach(element => {
                   element.alwaysSelectAsActiveMesh = true
                   
               });
            $(".Altria").on("click",e=>{
                $(".information").addClass("invisibleP")
                light.position.y=5
                scene.activeCamera=camera2;
            // camera2.attachControl(canvas,true);


            })
            $(".HBB").on("click",e=>{
                $(".information").addClass("invisibleP")
                light.position.y=-2.5
                scene.activeCamera=camera3;
            // camera3.attachControl(canvas,true);


            })
            $(".Website").on("click",e=>{
                $(".information").addClass("invisibleP")

                light.position.y=-6.5
                scene.activeCamera=camera4;
            // camera4.attachControl(canvas,true);


            })
            $(".Sycom").on("click",e=>{
                $(".information").addClass("invisibleP")
                light.position.y=12
                scene.activeCamera=camera5;
            // camera5.attachControl(canvas,true);


            })
          
            function displayinfoAltria(){
                $(".subdescription").text("")
               $(".information").removeClass("invisibleP")
                $(".description").text(information.Altria.information)
                $(".title").text("Altria Group")
                $(".subButton").addClass("invisibleP")

                $(".Phish").removeClass("invisibleP")

            }
            function displayinfoHBB(){
                $(".subdescription").text("")
                $(".information").removeClass("invisibleP")
                $(".description").text(information.HamiltonBeach.information)
                $(".title").text("Hamilton Beach")
                $(".subButton").addClass("invisibleP")

                $(".Support").removeClass("invisibleP")
                $(".Monitoring").removeClass("invisibleP")
            }

            function displayinfoWebsite(){
                $(".subdescription").text("")
                $(".information").removeClass("invisibleP")
                $(".description").text(information.Teamwork.information)
                $(".title").text("Website Maintnance")
                $(".subButton").addClass("invisibleP")
                 $(".WordPress").removeClass("invisibleP")
                $(".Joombla").removeClass("invisibleP")
                $(".SiteCore").removeClass("invisibleP")

            }
            function displayinfoSycom(){
                $(".subdescription").text("")
                $(".information").removeClass("invisibleP")
                $(".description").text(information.Sycom.information)
                $(".title").text("Sycom")
                $(".subButton").addClass("invisibleP")
                 $(".SolarWind").removeClass("invisibleP")
                $(".Ninja").removeClass("invisibleP")
                $(".ItGlue").removeClass("invisibleP")

            }
            $(".Phish").on("click",event=>{
                $(".subdescription").text(information.Altria.subinformation.phish)
            })
            $(".Support").on("click",event=>{
                $(".subdescription").text(information.HamiltonBeach.subinformation.support)
            })
            $(".Monitoring").on("click",event=>{
                $(".subdescription").text(information.HamiltonBeach.subinformation.monitor)
            })
            $(".WordPress").on("click",event=>{
                $(".subdescription").text(information.Teamwork.subinformation.wordpress)
            })
            $(".Joombla").on("click",event=>{
                $(".subdescription").text(information.Teamwork.subinformation.Joombla)
            })
            $(".SiteCore").on("click",event=>{
                $(".subdescription").text(information.Teamwork.subinformation.SiteCore)
            })
            $(".SolarWind").on("click",event=>{
                $(".subdescription").text(information.Sycom.subinformation.SolarWind)
            })
            $(".Ninja").on("click",event=>{
                $(".subdescription").text(information.Sycom.subinformation.Ninja)
            })
            $(".ItGlue").on("click",event=>{
                $(".subdescription").text(information.Sycom.subinformation.ITGlue)
            })
        
            

            var AltriaLogo = scene.getMeshByName("logo2")
            var warehouse = scene.getMeshByName("warehouse")
            var divs = scene.getMeshByName("div")
            var computers = scene.getMeshByName("computers")
            AltriaLogo.isPickable=true;
            warehouse.isPickable=true;
            divs.isPickable=true;
            computers.isPickable=true; 
            AltriaLogo.actionManager = new BABYLON.ActionManager(scene);
            AltriaLogo.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction( { trigger: BABYLON.ActionManager.OnPickTrigger, parameter:" "}, 
                function(){
                    displayinfoAltria();    
                })
            );
            warehouse.actionManager = new BABYLON.ActionManager(scene);
            warehouse.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction( { trigger: BABYLON.ActionManager.OnPickTrigger, parameter:" "}, 
                function(){
                        displayinfoHBB();
                })
            );
            divs.actionManager = new BABYLON.ActionManager(scene);
            divs.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction( { trigger: BABYLON.ActionManager.OnPickTrigger, parameter:" "}, 
                function(){
                        displayinfoWebsite();
                })
            );
            computers.actionManager = new BABYLON.ActionManager(scene);
            computers.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction( { trigger: BABYLON.ActionManager.OnPickTrigger, parameter:" "}, 
                function(){
                        displayinfoSycom();
                })
            );

            $(".X").on("click",event=>{
                $(".information").addClass("invisibleP");
            })



            // console.log(divs)

            // console.log(AltriaLogo)
            // console.log(warehouse)
            camera2.setTarget(AltriaLogo);
            camera3.setTarget(warehouse);
            camera4.setTarget(divs);
            camera5.setTarget(computers);

            scene.activeCamera=camera2;
                 
        var light = new BABYLON.PointLight("pointLight",new BABYLON.Vector3(0,4,0),scene);

        // light.parent = camera2;
        light.intensity=60;
        light.range=.1;
        // light.FALLOFF_PHYSICAL = 2;

    if (scene.animationGroups.length > 0) {
                    scene.animationGroups.forEach(animation => {
                        animation.play(true);
                        
                    });
                    
   
                
                }
            }
            )

            
           
       
          

        

            

      
        
    
        return scene;
    }

    var scene= createScene();
    engine.runRenderLoop(function(){
        // var light = scene.getLightByName("pointLight");
        // light.diffuse.b +=0.01;
        // light.diffuse.r +=0.01;
        

        
        scene.render();

    });

})