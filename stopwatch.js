/* start method starts the time, and stop method stops the time. If the time is already stopped or started
and the user tries to do that again, they are given an error. The duration field initially starts at 0 and 
stores the amount of time that has passed between when user started the time and stopped the time
*/

class Stopwatch{
    constructor(){
        let startTime, stopTime, duration = 0;
        let running = false;
        this.start = function(){
            if(running){
                throw new Error("Stopwatch is already running");
            }else{
                running = true;
                startTime = new Date();
            }
        };
        this.stop = function(){
            if(!running){
                throw new Error("Stopwatch hasn't been started yet");
            }else{
                running = false;
                stopTime = new Date();
            }
            duration = ((stopTime.getTime() - startTime.getTime())/1000)
        };
        this.reset = function(){
            startTime, stopTime, duration, running = 0;
        }
        Object.defineProperty(this, "duration",{
            get: function(){
                return duration;
            }
        })
    }
}