angular.module('spamapp', [])
  .controller('spamappController', function() {

    var tf2app = this;

    tf2app.keylist = [
        {label: "Home", value: "HOME"},
        {label: "Home (Keypad)", value: "KP_HOME"},
        {label: "End", value: "END"},
        {label: "End (Keypad)", value: "KP_END"},
    ]

    tf2app.spamtext = "";
    tf2app.scriptprefix = "spam";
    tf2app.scriptdelay = 300;
    tf2app.selectedKey = tf2app.keylist[0];

    tf2app.spamscript = "";


    tf2app.convert = function() {
      var lineList = tf2app.spamtext.split("\n");

      tf2app.spamscript = 'bind "' + tf2app.selectedKey.value + '" "start' + tf2app.scriptprefix + '" \n';

      lineList.forEach(function(element, index, array) {

        //First line
        if (index == 0) {
          tf2app.spamscript += 'alias start' + tf2app.scriptprefix + ' "say ' + element + '; wait ' + tf2app.scriptdelay.toString() + '; ' + tf2app.scriptprefix + '1;"\n';
        }
        //Last Line
        else if (index == array.length - 1) {
          tf2app.spamscript += 'alias ' + tf2app.scriptprefix + index.toString() + ' "say ' + element + '"' + '\n';
        }
        //Middle lines
        else {
          tf2app.spamscript += 'alias ' + tf2app.scriptprefix + index.toString() + ' "say ' + element + '; wait ' + tf2app.scriptdelay.toString() + '; ' + tf2app.scriptprefix + (index + 1).toString() + ';"\n';
        }

      });



    };

  });
