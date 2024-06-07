
                let outputScreen = document.getElementById("outputScreen");
                //Adding 2 vales 
                function display(num){
                    outputScreen.value += num;
                }
                //To get an answer if 2 or more numbers are +,-,*,/
                function calculate(){
                    try{
                        outputScreen.value = eval(outputScreen.value);
                    }
                //To not calculate when more that one operator is used in the calculator
                    catch(err)
                    {
                        alert("Invalid")
                    }
                }
                //Used for All Clear option,when clicked the entire value will be erased
                function Clear(){
                    outputScreen.value = "";
                }
                //Used to delete a number using del key
                function del(){
                    outputScreen.value = outputScreen.value.slice(0,-1);
                }