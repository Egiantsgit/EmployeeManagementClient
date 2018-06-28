pipeline{
    agent any    
    stages{
      
        stage("checkout"){
            steps{
                git url:'https://github.com/Egiantsgit/EmployeeManagementClient.git'
            }
        }
        
        stage("Install"){            
                steps{                    
                        sh "npm install"                      
                    
                }
        }
        
        stage("Unit test"){            
                steps{                         
                        sh "ng test --single-run true"                    
                }                
        }
        
        stage("Package"){            
                steps{                    
                        sh "ng build"
                    
                }
        }        
        
        
        
        stage("Docker build"){            
                steps{
                      sh "docker login --username egiantsdocker --password Egaints#1"        	
                      sh "docker build -t employeemanagementclient ."
                      sh "docker push egiantsdocker/employeemangementclient"
                    
                }
        }
        
    
    }
 
}        
        
