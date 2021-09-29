# 💻 Getting started with H-SQLt

The best way to learn HSQL is to try our <b>sample codes</b>, but before that, you might want to install it on your machine first.

There are two ways available to install and use H-SQL: 

1- If you are a beginner and you want to try HSQLt right away, <b>we recommend you to install the [Microsoft Visual Studio Code Extension](#VS-Code-Extension-installation)</b> since it is super easy to setup and work with. It can also help you with syntax highlighting, and auto-completion features if you are new to this programming language. 

Or

2- If you don't want to use VS-Code Editor you can check, build, make your code using [our HSQLt Command-line interface (CLI) tool](#Command-Line-Interface-tool-installation) depend on your operating system.

<hr>

## ⚙️Installation Instructions

First thing first, you have to clone the repo or download the zip file and unzip it on your machine.

```
git clone https://github.com/hpcc-systems/HSQL.git
```

Go inside the HSQL project and change your directory to [HSQT](hsqlt).

```
cd ./hsqlt/
```

### To install the Visual Studio Code Extension:

In your VS-Code Explorer, right-click on the latest version of the extension `hsqlt-extension-0.0.34.vsix` and look for 'Install from VSIX', navigate to it. Once you click on it you should see the following message on the bottom-right side of your VS-Code.

```
Completed installing hsqlt-extension extension from VSIX. Please reload Visual Studio Code to enable it.
```

Now, you can try writing your first `input.hsql` program and compile it into the `input.ecl` Or you can try it to compile the input.hsql that we have provided for you to check if your extension is working properly.

To do so, you can click on the input.hsql located inside the ./hsqlt directory and then open the Command window in your VS-Code Explorer by pressing the (`Ctrl + Shift +P`) and then in the drop-down menu select: <b>HSQL: COMPILE A HSQL PROGRAM to generate your first</b> `input.ecl` !

<!-- ![Giffy_To_Test](.\Animations_Gif\hsql-extention-install.gif) -->
![hsql-extention-install-gif](https://github.com/hpcc-systems/HSQL/blob/dev/hsqlt/Animations_Gif/hsql-extention-install.gif "Logo Title Text 1")

If you could generate the input.ecl, congrats! 🙌
