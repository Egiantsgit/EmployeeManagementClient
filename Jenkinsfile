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
                      sh "docker build -t egiantsdocker/employeemanagementclient ."
                      sh "docker push egiantsdocker/employeemanagementclient"
                    
                }
        }
      
        
        stage("Deploy"){
            steps{
                sh "docker pull egiantsdocker/employeemanagementclient"
                sh "docker run -p 80:80 --name employeemangementclient egiantsdocker/employeemanagementclient"
            }
        }
        
    
    }
 
}        
        
