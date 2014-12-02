   var mapping = {  "encrypted-persistence":
                    { "description": "Encrypt data that persists on the device"}
                 ,  "encrypted-core-data": 
                    { "description": "Provide encryption for the core data framework"
                    , "podspec":     "TEST"
                    }
                 , "secure-foundation":
                   { "description": "Provide encrypted key chain and file functionality"
                   , "podspec":     "TEST"
                   }
                 , "static-attack-defense":
                   { "description": "Prevent static attacks and code injection"}
                 , "encrypted-code-modules": 
                   { "description": "Provide an encrypted code module that verifies app integrity"
                   , "podspec": "TEST"
                   }
                 , "multicompiler": 
                   { "description": "Randomize the control flow of the produced binary each compile"
                   , "podspec": "TEST"
                   }
                 , "app-password": 
                   { "description": "Provide an application level password login separate from the device's"}
                 , "app-password-simple":
                   { "description": "Allow simple application passwords to be used"
                   , "podspec": "TEST"
                   }
                 , "app-password-complex":
                   { "description": "Force complex password requirements"
                   , "podspec": "TEST"
                   }
                 , "jailbreak-debug":
                   { "description": "Detect when a device or app is being tampered with" }
                 , "jailbreak":
                   { "description": "Detect when a device has been jailbroken"
                   , "podspec": "TEST"
                   }
                 , "debug": 
                   { "description": "Detect when an application has a debugger attached"
                   , "podspec": "TEST"
                   }
                 , "data-removal":
                   { "description": "Provide mechanisms for securely cleaning data"}
                 , "secure-foundation2":
                   { "description": "Secure shred capabililty to remove files from a sandbox"
                   , "reference": "secure-foundation"
                   }
                 , "memory-security":
                   { "description": "Clear sensitive areas of memory after use"
                   , "podspec": "TEST"
                   }
                 , "device-monitoring":
                   { "description": "Monitor the iOS kernel for information about all apps running"
                   , "podspec": "TEST"
                   }
                 , "memory-security2":
                   { "description": "Provide a mechanism for encrypting regions of memory"
                   , "reference": "memory-security"
                   }
                 };

   function description(key) { 
      return mapping[key]["description"];
   }

   function podspec(keys){
      var ret = "";
      var keySet = {};
      console.log(keys.length);
      for(var i = 0; i < keys.length; i++) {
         var k = keys[i];
         console.log(keys[i], k, mapping[k]);
         var tmp = mapping[k]["reference"];
         if( mapping[k]["podspec"] ) {
            tmp = k;
         } else if( tmp == undefined ) {
            continue;
         }
         keySet[tmp] = true;
      }
      console.log(keySet, keySet.length);
      for(var key in keySet) {
         console.log("SPEC: ", key);
         var spec = mapping[key]["podspec"];
         if(spec) ret += spec
      }
      return ret;
   }
