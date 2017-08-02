# Website for the PROS Foundation

This is the [Hugo](https://gohugo.io/) based website for the PROS foundation.

# General project layout
```
|-- README.md             --- This very document
|-- config.toml           --- main configuration doc for the site
|-- archetypes            --- hugo templates for creating new pages (unused)
|-- content               --- this is where new hugo pages get created (unused)
|-- data                  --- storage area for any data used to generate dyanmic pages
|   |-- projects          --- this is where you create the data files for projects (Collaborators)
|-- layouts               --- this is where we define the look and feel for the site
|   |-- index.html        --- this is the main (only) page for the website, it consist mainly of other partials
|   |-- 404.html          --- Custom 404 page for the site
|   |-- partials          --- HTML snippets that make up the parts of the site
|       |-- nav.html      --- This is the navigation bar
|       |-- head.html     --- This is the <HEAD></HEAD> section of the page
|       |-- footer.html   --- This is the actual footer on the page
|       |-- js.html       --- Javascript includes are here
|       |-- modals.html   --- This is where we load all the modals for the page
|-- public                --- /public is where hugo places the pages when ready for production
|-- static                --- files in /static will be copied to the /public without change
|   |-- css
|       |-- agency.css    --- This is the CSS for the site
|   |-- fonts
|   |-- img
|   |   |-- 404
|   |   |-- about
|   |   |-- logos
|   |   |-- portfolio
|   |   |-- team
|   |-- js
|       |-- agency.js     --- this is the custom javascript for the site
|-- themes                --- this is where you'd place hugo themes (unused)
```

# Getting a local environment setup

# Making and testing changes

# Commiting your changes

These steps assume you're using the command line client, if you're using a graphical interface, the steps remain the same.
1. Run ```git pull```.  This will update your local working copy with the remote source.  This is an important step.  If there are changes at the remote side, you'll have to do an extra merge commit.  This isn't a big deal, but it's ugly and shows you weren't disciplined.  :)  Always do a git pull before a commit.
2. Type ```git status```.  This will show you the locally changed files that aren't commited yet.
3. Review what changes are pending to be made. (Untracked & modified files)
4. Run ```git add <path>``` to add any changed or added files that you want to update.  You can run this as many times as you like.  tip: running git add layouts/ will add anything in the layouts directory.
5. Run ```git commit -m "Enter a summarizing your changes here"```  This will make a commit in the local copy of the repository.
6. Run ```git push```.  This will update the remote repository.

# Pushing the changes to production
1. Make sure all your changes are checked in and your local working copy is even with remote!  See "commiting your changes" above
2. In the root of the project, run: ```hugo```   Hugo will then regenerate the website in the public directory.
3. If you run git status now, you should have a bunch of changes in /public.
4. Run:
```
git pull
git add public
git commit -m "Pushing new updates to blah and blah plus blah"
git push
```
