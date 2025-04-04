import { TCareHeartMedicalQuestion } from "@/store/types/Health/HealthQuotation/TCareHeartMedicalQuestion";

export const CARE_HEART_QUESTION_INITIAL_VALUE =
  (): TCareHeartMedicalQuestion => {
    return {
      MQ01: {
        main_question: {
          id: "MQ01",
          icon_class: "tobaco",
          title: "",
          description: "Cancer,Tumor,Polyp or Cyst",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ02: {
        main_question: {
          id: "MQ02",
          icon_class: "tobaco",
          title: "",
          description:
            "HIV/SLE/ Arthiritis/ Scleroderma / Psoriasis/ bleeding or clotting disorders or any other diseases of Blood, Bone marrow/ Immunity or Skin",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ03: {
        main_question: {
          id: "MQ03",
          icon_class: "tobaco",
          title: "",
          description:
            "Asthma / Tuberculosis / COPD/ Pleural effusion / Bronchitis / Emphysema or any other disease of Lungs, Pleura and airway or ",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ04: {
        main_question: {
          id: "MQ04",
          icon_class: "tobaco",
          title: "",
          description:
            "Thyroid disease/ Cushing's disease/ Parathyroid Disease/ Addison's disease / Pituitary tumor/ disease or any other disorder of Endocrine ",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ05: {
        main_question: {
          id: "MQ05",
          icon_class: "tobaco",
          title: "",
          description:
            "Cirrhosis/Hepatitis/Wilson disease/Pancreatitis/Liver, Crohn disease/Ulcerative Colitis/Piles/Gall bladder,Stomach/Intestine/Digestive ",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ06: {
        main_question: {
          id: "MQ06",
          icon_class: "tobaco",
          title: "",
          description:
            "Any other disease / health adversity / injury/ condition / treatment not mentioned above",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Other Dieases Description",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Other Dieases Description",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ07: {
        main_question: {
          id: "MQ07",
          icon_class: "tobaco",
          title: "",
          description:
            "Smoke,consume alcohol,chew tobacco,ghutka or paan or use any recreational drugs? If Yes then please provide the frequency &amp; ",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Hard Liquor- No.of Pegs in 30 ml per week",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Beer-Bottles/ml per week",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Wine-Glasses/ml per week",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Smoking- No.of sticks per day",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Gutka/Pan Masala/Chewing Tobacco etc- Grams per day",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Hard Liquor- No.of Pegs in 30 ml per week",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Beer-Bottles/ml per week",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Wine-Glasses/ml per week",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Smoking- No.of sticks per day",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Gutka/Pan Masala/Chewing Tobacco etc- Grams per day",
                  field_type: "TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ08: {
        main_question: {
          id: "MQ08",
          icon_class: "tobaco",
          title: "",
          description:
            "Have you been advised for any other/repeat procedure or admission? If yes Share details",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
          },
        },
      },
      MQ09: {
        main_question: {
          id: "MQ09",
          icon_class: "tobaco",
          title: "",
          description:
            " Have you undergone any procedure or surgery for any cardiac ailment?",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
          },
        },
      },
      MQ10: {
        main_question: {
          id: "MQ10",
          icon_class: "tobaco",
          title: "",
          description:
            "Are you or anyone of your family member 1st blood relationship suffering from any of the following conditions: Downs Syndrome/Turners Syndrome/Sickle Cell Anaemia/ Thalassemia Major/G6PD deficiency",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ11: {
        main_question: {
          id: "MQ11",
          icon_class: "tobaco",
          title: "",
          description:
            "Diabetes Mellitus / High Blood Sugar / Diabetes on Insulin or medication",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
          },
        },
      },
      MQ12: {
        main_question: {
          id: "MQ12",
          icon_class: "tobaco",
          title: "",
          description:
            "Has any of the Proposed to be Insured been hospitalized/recommended to take investigation/medication or has been under any prolonged treatment/undergone surgery for any illness/injury other than for childbirth/minor injuries",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
          },
        },
      },
      MQ13: {
        main_question: {
          id: "MQ13",
          icon_class: "tobaco",
          title: "",
          description:
            "Kidney stone/Renal Failure/ Dialysis/ Chronic Kidney Disease/ Prostate Disease or any other disease of Kidney, Urinary Tract or reproductive organs",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ14: {
        main_question: {
          id: "MQ14",
          icon_class: "tobaco",
          title: "",
          description:
            "Motor Neuron Disease/ Muscular dystrophies/ Myasthenia Gravis or any other disease of Neuromuscular system muscles and/or nervous ",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ15: {
        main_question: {
          id: "MQ15",
          icon_class: "tobaco",
          title: "",
          description:
            "Have you experienced any below mentioned symptoms post undergoing above mentioned surgery/procedure",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Chest heaviness or Pain",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Difficulty in breathing",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Palpitations",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Loss of consciousness",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Weakness or dizziness",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Chest heaviness or Pain",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Difficulty in breathing",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Palpitations",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Loss of consciousness",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Weakness or dizziness",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ16: {
        main_question: {
          id: "MQ16",
          icon_class: "tobaco",
          title: "",
          description:
            "Stroke/Paralysis/TransientIschemicAttack/MultipleSclerosis/Epilepsy/Mental-Psychiatricillness/Parkinson/Alzeihmer/Depression/Dementia/NervousSystem",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ17: {
        main_question: {
          id: "MQ17",
          icon_class: "tobaco",
          title: "",
          description:
            "Disease or disorder of eye, ear, nose or throat except any sight related problems corrected by prescription lenses",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Existing Since",
                  field_type: "DATEPICKER",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
      MQ18: {
        main_question: {
          id: "MQ18",
          icon_class: "tobaco",
          title: "",
          description:
            "Have you ever been diagnosed for any cardiac ailment /disorder?",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
          },
        },
      },
      MQ19: {
        main_question: {
          id: "MQ19",
          icon_class: "tobaco",
          title: "",
          description: "Hypertension / High Blood Pressure/ High Cholesterol",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
            },
          },
        },
      },
      MQ20: {
        main_question: {
          id: "MQ20",
          icon_class: "tobaco",
          title: "",
          description:
            "Specify the type of cardiac ailment you have been operated for",
          status: false,
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Have you undergone PTCA",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "CABG",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Septal defect surgery-ASD/VSD",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Radiofrequency ablation-RFA",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Others cardiac surgery",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
              },
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Have you undergone PTCA",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "CABG",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Septal defect surgery-ASD/VSD",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Radiofrequency ablation-RFA",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
                "MQ1-SQ1-F5": {
                  id: "MQ1-SQ1-F5",
                  title: "Others cardiac surgery",
                  field_type: "DROPDOWN",
                  value: { value: "", warning: false },
                },
              },
            },
          },
        },
      },
    };
  };
