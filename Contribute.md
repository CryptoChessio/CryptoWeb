# Contribute

## Thank you for wanting to contribute:

Here are the steps to follow, fist fork the repo, then in your terminal (replace your user name with your username but it will usually come when you fork it)

```
git clone https://github.com/<YourUserName>/WEBCryptoChess.io.git
```

Then branch it (replace branch with your name or whatever you want)

```
git checkout -b <branch>
```

Make sure your on the new branch you should see

```
$ git checkout -b new_branch
Switched to a new branch ‘new_branch’
```

Create a new remote for the upstream repo with the command

```
git remote add upstream https://github.com/<YourUserName>/WEBCryptoChess.io.git
```

One more time check you are on the right branch with

```
git status
```

Should see

```
On branch new_branch
No commits yet
```

Then you should be fine to start editing go into the file using

```
 cd WEBCryptoChess.io
```

and open the file up in vs code in your code editor but if your vs code

```
code .
```

then after that please put your name into Log.md and the time you started and pick a task from todo.md. After that

```
cd my-app
```

make sure you have yarn and node installed

```
yarn install
```

```
yarn run build
```

```
yarn run dev --open
```

Then begin to do your editing in the files, the file dir include the main page files in src and the components in lib.

to add any packages use

```
yard add <package>
```

When your done do the standard

```
git add .
```

```
git commit -S -m "commit message"
```

Replace branch name with your branch name

```
git push -u origin <branchName>
```

Once you push the changes to your repo, the Compare & pull request button will appear in GitHub. Open a pull request by clicking the Create pull request button. This allows the repo's maintainers to review your contribution. From here, they can merge it if it is good, or they may ask you to make some changes.
