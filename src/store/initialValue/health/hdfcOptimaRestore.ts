import { TCareMedicalQuestion } from "@/store/types/Health/HealthQuotation/TCareMedicalQuestion";

export const OPTIMA_RESTORE_INITIAL_VALUE = (): TCareMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "",
        title: "Smoking",
        description: "Does any of the members Smoke?",
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
                title: "Quantity Per day",
                field_type: "DROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No. of years since you are smoking",
                field_type: "SERACHDROPDOWN",
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
                title: "Quantity Per day",
                field_type: "DROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No. of years since you are smoking",
                field_type: "SERACHDROPDOWN",
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
                title: "Quantity Per day",
                field_type: "DROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No. of years since you are smoking",
                field_type: "SERACHDROPDOWN",
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
                title: "Quantity Per day",
                field_type: "DROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No. of years since you are smoking",
                field_type: "SERACHDROPDOWN",
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
                title: "Quantity Per day",
                field_type: "DROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No. of years since you are smoking",
                field_type: "SERACHDROPDOWN",
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
                title: "Quantity Per day",
                field_type: "DROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No. of years since you are smoking",
                field_type: "SERACHDROPDOWN",
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
        icon_class: "",
        title: "Tobacco",
        description: "Do you Chew Pan Masala?",
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
                title: "Pouches Per day",
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
                title: "Pouches Per day",
                field_type: "DROPDOWN",
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
                title: "Pouches Per day",
                field_type: "DROPDOWN",
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
                title: "Pouches Per day",
                field_type: "DROPDOWN",
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
                title: "Pouches Per day",
                field_type: "DROPDOWN",
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
                title: "Pouches Per day",
                field_type: "DROPDOWN",
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
        title: "Alcohol",
        description: "Do you drink Alcohol (per week)?",
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
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Bottles Of Beer",
                field_type: "SERACHDROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Glasses of Wine",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "No. of days  of week alochol is consumed",
                field_type: "SERACHDROPDOWN",
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
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Bottles Of Beer",
                field_type: "SERACHDROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Existing Since",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "No. of days  of week alochol is consumed",
                field_type: "SERACHDROPDOWN",
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
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Bottles Of Beer",
                field_type: "SERACHDROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Glasses of Wine",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "No. of days  of week alochol is consumed",
                field_type: "SERACHDROPDOWN",
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
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Glasses of Wine",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "No. of days  of week alochol is consumed",
                field_type: "SERACHDROPDOWN",
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
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Bottles Of Beer",
                field_type: "SERACHDROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Glasses of Wine",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "No. of days  of week alochol is consumed",
                field_type: "SERACHDROPDOWN",
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
                title: "Liquor(30 ml pegs)",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "Bottles Of Beer",
                field_type: "SERACHDROPDOWN",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F3": {
                id: "MQ1-SQ1-F3",
                title: "Glasses of Wine",
                field_type: "SERACHDROPDOWN",

                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F4": {
                id: "MQ1-SQ1-F4",
                title: "No. of days  of week alochol is consumed",
                field_type: "SERACHDROPDOWN",
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
        icon_class: "",
        title: "Pre-Existing Diseases",
        description:
          "Does any person(s) to be insured has any Pre-Existing diseases?",
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
          child_one: {
            keyName: "child_one",

            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_two: {
            keyName: "child_two",

            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
            selection_status: false,
          },
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
            selection_status: false,
          },
        },
        sub_question: {
          "MQ1-SQ1": {
            id: "MQ1-SQ1",
            icon_class: "",
            status: false,
            title: "Diabetes",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",

                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ2-SQ2": {
            id: "MQ2-SQ2",
            icon_class: "",
            status: false,
            title: "Tumour or Cancer?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ3-SQ3": {
            id: "MQ3-SQ3",
            icon_class: "",
            status: false,
            title: "Heart & Circulatory disorders?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ4-SQ4": {
            id: "MQ4-SQ4",
            icon_class: "",
            status: false,
            title: "Disorder of Spine and Joints?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ5-SQ5": {
            id: "MQ5-SQ5",
            icon_class: "",
            status: false,
            title:
              "Disorders of the stomach including intestine, Kidney, Prostate?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ6-SQ6": {
            id: "MQ6-SQ6",
            icon_class: "",
            status: false,
            title: "Nervous disorder, fits, mental condition ?",
            description:
              "Urinary Conditions or Disorders Blood in urine increase in urinary frequency painful or difficult urination Kidney and or Bladder infections stones of urinary system kidney failure dialysis or Any Other Kidney or Urinary Tract Or Prostate Disease",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ7-SQ7": {
            id: "MQ7-SQ7",
            icon_class: "",
            status: false,
            title: "Respiratory disorder?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ8-SQ8": {
            id: "MQ8-SQ8",
            icon_class: "",
            status: false,
            title: "Thyroid Disorder",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ9-SQ9": {
            id: "MQ9-SQ9",
            icon_class: "",
            status: false,
            title:
              "Any ongoing diseases or ailment requiring surgical or medical treatment?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ10-SQ10": {
            id: "MQ10-SQ10",
            icon_class: "",
            status: false,
            title:
              "Have you or any other member proposed to be insured under this policy sought medical advice or undergone any treatment medical or surgical in past 5 years due to any of the diseases/conditions listed above or otherwise or attended follow up for any disease /condition / ailment/ injury / addiction (except for infrequent common illness for example fever, common cold, loose motions, cough and cold, headaches, acidity ?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
          "MQ11-SQ11": {
            id: "MQ11-SQ11",
            icon_class: "",
            status: false,
            title: "Is any of the insured pregnant?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
                name: "",

                image_class: "child",
                selection_status: false,
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                selection_status: false,
              },
            },
          },
        },
      },
    },
  };
};
