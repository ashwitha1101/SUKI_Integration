import {useEffect, useState, useMemo} from 'react';
import {SukiProvider, SukiAssistant, useSuki } from '@suki-sdk/react';

const Child = () => {
    const [showUI, setShowUI] = useState(true);

    const [encounter, setEncounter] = useState( {
      identifier : "567e58ac1ee0-ff703e8f-77b5-40d5-9b5",
      patient : {
        kind : "",
        identifier : "6543-00652a6e-5976-48f4-c6aeb7dc6c83",
        name : {
          use : "official",
          family : "Shikawat",
          given : "Avantika",
          suffix : "ms"
        },
        birthDate : "1995-05-06",
        gender : "female"
        }
    });
  
    useEffect(() => {
      console.log(encounter);
    }, [encounter]);


    const uiOptions = {
      showCloseButton: true,
      showCreateEmptyNoteButton: true,
      showStartAmbientButton: true,
      sectionEditing: {
        enableDictation: true,
        enableCopy: true,
        enableInsertScript: true
      }
    };

    const ambientOptions = useMemo(()=> ({
      prefill: {
        noteTypeIds: ["23asdas21dkh"]
      }
     }), [])

    // const ambientOptions = {
    //   sections: [
    //     { loinc: "10164-2", name: "History of Present Illness" },
    //     { loinc: "29545-1", name: "Physical Examination" }
    //   ]
    // };


    return (
      <SukiAssistant
      encounter={encounter}
      uiOptions={uiOptions}
      ambientOptions={ambientOptions}
      onNoteSubmit={(note) => {
        console.log("Note submitted:", note);
      }}
      onClose={() => {
        console.log("Assistant closed");
      }}
    />

    );

   };


   export default Child;