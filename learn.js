git安装完后，还需要最后一步设置，在命令行输入：
git config --global user.name “nicholas”
git config --global user.email “1406325635@qq.com”
注：git config命令的--global参数，用了这个参数，表示你这台表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

创建一个版本库：
第一步：创建空文件夹
mkdir learnGit
cd lenrnGit
pwd
pwd命令用于显示当前目录。
第二步：初始化目录
git init

把文件放到Git仓库：
第一步：创建一个文件命名为readme.txt
第二步：git add readme.txt（如果没有找到文件，在执行「git add readme.txt」之前先执行「touch readme.txt」就行了...）
第三步：git commit -m "wrote a readme file"
注：每次修改后都需要运行第二步和第三步的命令。

简单解释一下git commit命令，-m后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。
嫌麻烦不想输入-m "xxx"行不行？确实有办法可以这么干，但是强烈不建议你这么干，因为输入说明对自己对别人阅读都很重要。实在不想输入说明的童鞋请自行Google，我不告诉你这个参数。

git add file1.txt
git add file2.txt file3.txt
git commit -m "add 3 files."
commit可以一次性提交多个文件。

git status：命令可以让我们时刻掌握仓库当前的状态。
git diff（git diff readme.txt）：顾名思义就是查看difference，显示的格式正是Unix通用的diff格式。
git log：命令显示从最近到最远的提交日志。
git log --pretty=oneline：命令显示从最近到最远的提交日志，只有版本号和提交时的注释。

你看到的一大串类似3628164...882e1e0的是commit id（版本号），和SVN不一样，Git的commit id不是1，2，3……递增的数字，而是一个SHA1计算出来的一个非常大的数字，用十六进制表示
首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，也就是最新的提交3628164...882e1e0（注意我的提交ID和你的肯定不一样），上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。

git reset --hard HEAD^：回到上一个版本。

回到未来某个版本：办法其实还是有的，只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个未来的commit id是...，于是就可以指定回到未来的某个版本。版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。
git reset --hard 3628164（commit id）

Git提供了一个命令git reflog用来记录你的每一次命令，用来回到任意一个版本。

git diff    #是工作区(work dict)和暂存区(stage)的比较
git diff --cached    #是暂存区(stage)和分支(master)的比较

git diff HEAD -- readme.txt：命令可以查看工作区和版本库里面最新版本的区别。

git add：把文件放到暂存区。
git commit：把文件放到分支。

git checkout -- readme.js：可以丢弃工作区的修改。
一种是readme.js自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；
一种是readme.js已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
git checkout -- file命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令。

git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区。
git reset HEAD readme.js

git rm test.js：删除文件（好像不能恢复）
git checkout -- test.js：(手动从文件管理器中删除)其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。


配置Github：
第一步：注册一个GitHub账号，就可以免费获得Git远程仓库。（nicholasLawliet，APTX4869***）
第二步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：ssh-keygen -t rsa -C "1406325635@qq.com"。
第三步：登陆GitHub，打开“Account settings”，“SSH and GPG keys”页面。
第四步：然后，点“New SSH key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容。点“Add Key”，你就应该看到已经添加的Key。

提交远程仓库：
第一步：git remote add origin git@github.com:nicholasLawliet/fancypants-changsha.git。
第二步：git push -u origin master。
上一步如有报错：
To git@github.com:yangchao0718/cocos2d.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to git@github.com:nicholasLawliet/fancypants-changsha.git
hint: Updates were rejected because the tip of your current branch is behin
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
这是因为远程仓库中有新文件（README.md）没有合并在本地，使用一下命令合并：
git pull --rebase origin master
然后在使用第二步的命令上传即可。
删除存在的远程仓库命令：git remote remove orgin
























