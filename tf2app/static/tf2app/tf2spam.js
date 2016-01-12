angular.module('spamapp', ['ui.bootstrap'])
  .controller('spamappController', function() {

    var tf2app = this;

    tf2app.keylist = [
        {label: "Insert", value: "INS"},
        {label: "Delete", value: "DEL"},
        {label: "Home", value: "HOME"},
        {label: "End", value: "END"},
        {label: "PgUp", value: "PGUP"},
        {label: "PgDn", value: "PGDN"},
        {label: "Home (Keypad)", value: "KP_HOME"},
        {label: "End (Keypad)", value: "KP_END"},
        {label: "PgUp (Keypad)", value: "KP_PGUP"},
        {label: "PgDn (Keypad)", value: "KP_PGDN"},
    ]

    tf2app.spamtext = "Sample Text\nSample Text";
    tf2app.scriptprefix = "spam";
    tf2app.scriptdelay = 300;
    tf2app.selectedKey = tf2app.keylist[0];

    tf2app.spamscript = "";


    tf2app.convert = function() {
      var lineList = tf2app.spamtext.split("\n");

      tf2app.spamscript = '//Script created with https://tf2bindgenerator.appspot.com\n';
      tf2app.spamscript += '//on ' + Date() + '\n';

      tf2app.spamscript += 'bind "' + tf2app.selectedKey.value + '" "start' + tf2app.scriptprefix + '" \n';



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
