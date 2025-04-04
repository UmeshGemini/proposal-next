import { TStarMedicalQuestion } from "@/store/types/Health/HealthQuotation/TStarMedicalQuestion";

export const STAR_QUESTION_INITIAL_VALUE = (): TStarMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "Social Status",
        description:
          "Social Status (Please choose ‘Yes’ in case of BPL families, Disabled Persons etc, Persons working in UnOrganized/Informal Sectors)?",
        status: false,
        sub_question: {
          "MQ1-SQ1": {
            id: "MQ1-SQ1",
            icon_class: "",
            status: false,
            title:
              "Please choose ‘Yes’, if you are working in UnOrganized Sector",
            description: "",
          },
          "MQ2-SQ2": {
            id: "MQ2-SQ2",
            icon_class: "",
            status: false,
            title:
              "Please choose ‘Yes’, if you live below the poverty line (BPL)",
            description: "",
          },
          "MQ3-SQ3": {
            id: "MQ3-SQ3",
            icon_class: "",
            status: false,
            title:
              "Please choose ‘Yes’, if you are Physically Handicaped/Disabled",
            description: "",
          },
          "MQ4-SQ4": {
            id: "MQ4-SQ4",
            icon_class: "",
            status: false,
            title: "Please choose ‘Yes’, if you are working in Informal Sector",
            description: "",
          },
        },
      },
    },
    MQ02: {
      main_question: {
        id: "MQ02",
        icon_class: "tobaco",
        title: "Other Health Insurance Policy",
        description:
          "Do you have any other health insurance covering the persons proposed in the past or current ?",
        status: false,
      },
    },
    MQ03: {
      main_question: {
        id: "MQ03",
        icon_class: "tobaco",
        title: "Health problems",
        description: "Do you have any health problems ?",
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
                title: "Hypertension",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Diabetes",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Any other Diseases",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "Diseases Name",
                field_type: "DISEASES_TEXTFIELD",
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
                title: "Hypertension",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Diabetes",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Any other Diseases",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "Diseases Name",
                field_type: "DISEASES_TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Hypertension",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Diabetes",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Any other Diseases",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "Diseases Name",
                field_type: "DISEASES_TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Hypertension",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Diabetes",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Any other Diseases",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "Diseases Name",
                field_type: "DISEASES_TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Hypertension",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Diabetes",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Any other Diseases",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "Diseases Name",
                field_type: "DISEASES_TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Hypertension",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Diabetes",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Any other Diseases",
                field_type: "CHECKBOX",
                value: { value: false, warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "Diseases Name",
                field_type: "DISEASES_TEXTFIELD",
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
        title: "Manual labour",
        description:
          "Does your occupation require you to engage in manual labour?",
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
                title: "Engage in manual labour",
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
                title: "Engage in manual labour",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in manual labour",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in manual labour",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in manual labour",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in manual labour",
                field_type: "TEXTFIELD",
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
        title: "Hazardous Activity",
        description:
          "Do you engage in, or propose to engage in, any activity or sport that is hazardous or adventurous in nature, such as racing, mountaineering, winter sports, etc.? If so, please specify.",
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
                title: "Engage in Winter Sports",
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
                title: "Engage in Winter Sports",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in Winter Sports",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in Winter Sports",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in Winter Sports",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
            field_data: {
              "MQ1-SQ1-F1": {
                id: "MQ1-SQ1-F1",
                title: "Engage in Winter Sports",
                field_type: "TEXTFIELD",
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
        title: "Pre-Existing Diseases",
        description:
          "Have you or any member of your family proposed to be insured, suffered or are suffering from any disease/ailment/adverse medical condition of any kind especially Heart/Stroke/Cancer/Real Disorder/Alzheimer's disease/Parkinson's disease?",
        status: false,
      },
    },
  };
};

export const STAR_RED_CARPET_QUESTION_INITIAL_VALUE =
  (): TStarMedicalQuestion => {
    return {
      MQ01: {
        main_question: {
          id: "MQ01",
          icon_class: "tobaco",
          title: "Social Status",
          description:
            "Social Status (Please choose ‘Yes’ in case of BPL families, Disabled Persons etc, Persons working in UnOrganized/Informal Sectors)?",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title:
                "Please choose ‘Yes’, if you are working in UnOrganized Sector",
              description: "",
            },
            "MQ2-SQ2": {
              id: "MQ2-SQ2",
              icon_class: "",
              status: false,
              title:
                "Please choose ‘Yes’, if you live below the poverty line (BPL)",
              description: "",
            },
            "MQ3-SQ3": {
              id: "MQ3-SQ3",
              icon_class: "",
              status: false,
              title:
                "Please choose ‘Yes’, if you are Physically Handicaped/Disabled",
              description: "",
            },
            "MQ4-SQ4": {
              id: "MQ4-SQ4",
              icon_class: "",
              status: false,
              title:
                "Please choose ‘Yes’, if you are working in Informal Sector",
              description: "",
            },
          },
        },
      },
      MQ02: {
        main_question: {
          id: "MQ02",
          icon_class: "tobaco",
          title: "Other Health Insurance Policy",
          description:
            "Do you have any other health insurance covering the persons proposed in the past or current ?",
          status: false,
        },
      },
      MQ03: {
        main_question: {
          id: "MQ03",
          icon_class: "tobaco",
          title: "Health problems",
          description: "Do you have any health problems ?",
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
                  title: "Hypertension",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Diabetes",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Any other Diseases",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Diseases Name",
                  field_type: "DISEASES_TEXTFIELD",
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
                  title: "Hypertension",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Diabetes",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Any other Diseases",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Diseases Name",
                  field_type: "DISEASES_TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Hypertension",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Diabetes",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Any other Diseases",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Diseases Name",
                  field_type: "DISEASES_TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Hypertension",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Diabetes",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Any other Diseases",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Diseases Name",
                  field_type: "DISEASES_TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Hypertension",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Diabetes",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Any other Diseases",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Diseases Name",
                  field_type: "DISEASES_TEXTFIELD",
                  value: { value: "", warning: false },
                },
              },
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              selection_status: false,
              field_data: {
                "MQ1-SQ1-F1": {
                  id: "MQ1-SQ1-F1",
                  title: "Hypertension",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F2": {
                  id: "MQ1-SQ1-F2",
                  title: "Diabetes",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F3": {
                  id: "MQ1-SQ1-F3",
                  title: "Any other Diseases",
                  field_type: "CHECKBOX",
                  value: { value: false, warning: false },
                },
                "MQ1-SQ1-F4": {
                  id: "MQ1-SQ1-F4",
                  title: "Diseases Name",
                  field_type: "DISEASES_TEXTFIELD",
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
          title: "Pre-Existing Diseases",
          description:
            "Have you or any member of your family proposed to be insured, suffered or are suffering from any disease/ailment/adverse medical condition of any kind especially Heart/Stroke/Cancer/Real Disorder/Alzheimer's disease/Parkinson's disease?",
          status: false,
        },
      },
    };
  };
