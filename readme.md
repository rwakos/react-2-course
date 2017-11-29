#Git commands
#Git init
git init

#Git Add First time
git add .

#Git Commit 
git commit -m "Title"

#View if we have ssh keys
ls -a ~/.ssh

#Generate SSH Keys
ssh-keygen -t rsa -b 4096 -C "rwakos@gmail.com"

#Validate if agent is running
eval "$(ssh-agent -s)"
Should get Agent pid Number...

#Add SSH Key
ssh-add ~/.ssh/id_rsa

#Copy key for GitHub
 clip < ~/.ssh/id_rsa.pub
 
#Login Github
 ssh -T git@github.com

#Git set URL
git remote add origin git@github.com:rwakos/react-2-course.git

#Git Push first time
 git push -u origin master
 
 ... if failed run (ONLY FOR THE FIRST TIME):
 git push -f origin master
 
 #Git add + commit at the same time
 git commit -am "Title"
 