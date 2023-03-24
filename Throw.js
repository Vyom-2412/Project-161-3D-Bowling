AFRAME.registerComponent("bowling_ball",{
    init: function(){
        this.throwBall()
    },
    throwBall: function(){
        window.addEventListener("keydown",e=>{
            if(e.key==="z"){
                var ball = document.createElement("a-entity")
                ball.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.5
                })
                ball.setAttribute("material","color","black")

                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                ball.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var camera = document.querySelector("#camera").object3D
                
                //Get the camera direction as three.js vector
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)

                //Set the velocity and its direction
                ball.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
            }
        })
    }
})