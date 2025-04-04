import { TKotakMedicalQuestion } from "@/store/types/Health/HealthQuotation/TKotakMedicalQuestion";

export const KOTAK_QUESTION_INITIAL_VALUE = (): TKotakMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "Good Health",
        description:
          "Are you currently in good health and not undergoing any treatment or medication for any illness/medical condition (Physical, Psychiatric, Mental illness /disorders, Sleep disorders)?",
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
      },
    },
    MQ02: {
      main_question: {
        id: "MQ02",
        icon_class: "tobaco",
        title: "Pre-Existing Diseases",
        description:
          "Does any person(s) to be insured has any Pre-Existing diseases?",
        status: false,
        sub_question: {
          "MQ1-SQ1": {
            id: "MQ1-SQ1",
            icon_class: "",
            status: false,
            title: "Infections / Allergies?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ2-SQ2": {
            id: "MQ2-SQ2",
            icon_class: "",
            status: false,
            title: "Are you suffering from HIV/AIDS?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ3-SQ3": {
            id: "MQ3-SQ3",
            icon_class: "",
            status: false,
            title: "Are you suffering from Cancer/Tumor/Cyst?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ4-SQ4": {
            id: "MQ4-SQ4",
            icon_class: "",
            status: false,
            title: "Are you suffering from Mental psychiatric Disorders?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ5-SQ5": {
            id: "MQ5-SQ5",
            icon_class: "",
            status: false,
            title: "Disorders of the Eyes/Ears/Nose/throat/?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ6-SQ6": {
            id: "MQ6-SQ6",
            icon_class: "",
            status: false,
            title:
              "Are you suffering from circulatory/Heart/hypertension diseases?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ7-SQ7": {
            id: "MQ7-SQ7",
            icon_class: "",
            status: false,
            title: "Any Respiratory Infections/Diseases/Asthma?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ8-SQ8": {
            id: "MQ8-SQ8",
            icon_class: "",
            status: false,
            title:
              "Are you suffering from Bones/Joints/Spondylitis/arthritis etc?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ9-SQ9": {
            id: "MQ9-SQ9",
            icon_class: "",
            status: false,
            title:
              "Are you suffering from Stomach/Intestines/liver/appendix Diseases?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ10-SQ10": {
            id: "MQ10-SQ10",
            icon_class: "",
            status: false,
            title: "Are you suffering from Kidney/urinary Disease?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ11-SQ11": {
            id: "MQ11-SQ11",
            icon_class: "",
            status: false,
            title:
              "Pregnant/Gynaecological Disorders/any disorder of Prostrate?",
            description: "",
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
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
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
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
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
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
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
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
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
          "MQ12-SQ12": {
            id: "MQ12-SQ12",
            icon_class: "",
            status: false,
            title: "Any Birth Defects?",
            description: "",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                selection_status: false,
                field_data: {
                  "MQ1-SQ1-F1": {
                    id: "MQ1-SQ1-F1",
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
                    field_type: "TEXTFIELD",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ13-SQ13": {
            id: "MQ13-SQ13",
            icon_class: "",
            status: false,
            title:
              "Have you undergone any medical test or health check up in the past 6 month if yes then please mention if any abnormal result detected",
            description: "",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                selection_status: false,
                field_data: {
                  "MQ1-SQ1-F1": {
                    id: "MQ1-SQ1-F1",
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Description",
                    field_type: "TEXTFIELD",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ14-SQ14": {
            id: "MQ14-SQ14",
            icon_class: "",
            status: false,
            title: "Any other illness/ Injury details",
            description: "",
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
                    title: "Description",
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
                    title: "Description",
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
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Description",
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
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Description",
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
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Description",
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
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Description",
                    field_type: "TEXTFIELD",
                    value: { value: "", warning: false },
                  },
                },
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
          "Are you currently suffering or previously suffered from any illness and on continuous medication for same and duration since on treatment?",
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
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
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
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
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
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
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
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
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
          "Are you currently suffering or previously suffered from High BP, Cholestero and on continuous medication for same?",
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
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
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
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
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
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
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
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
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
          "Diabetes Mellitus type 1 or Diabetes on insulin or Diabetes associated with blindness or chronic foot ulcer?",
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
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
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
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
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
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
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
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
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
        title: "Hospitalized",
        description:
          "Has any of the new person(s) to be insured been diagnosed / hospitalized for any illness / injury during the last 48 months?",
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
                title: "Duration",
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
                title: "Duration",
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
                title: "Duration",
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
                title: "Duration",
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
                title: "Duration",
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
                title: "Duration",
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
        title: "Accidents/burns?",
        description: "",
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
          child_one: {
            keyName: "child_one",
            name: "",
            image_class: "child",
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
          child_two: {
            keyName: "child_two",
            name: "",
            image_class: "child",
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
          child_three: {
            keyName: "child_three",
            name: "",
            image_class: "child",
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
          child_four: {
            keyName: "child_four",
            name: "",
            image_class: "child",
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
    MQ08: {
      main_question: {
        id: "MQ08",
        icon_class: "tobaco",
        title: "Smoking",
        description: "Do you Smoke/Tobacco consumption?",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
    MQ09: {
      main_question: {
        id: "MQ09",
        icon_class: "tobaco",
        title: "Alcohol",
        description:
          "Do you consume Alcohol(Beer - No. of Pints/week, Wine & Spirit - ml/week)?",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
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
                title: "Quantity",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
              "MQ1-SQ1-F2": {
                id: "MQ1-SQ1-F2",
                title: "No of Years",
                field_type: "TEXTFIELD",
                value: { value: "", warning: false },
              },
            },
          },
        },
      },
    },
    MQ10: {
      main_question: {
        id: "MQ10",
        icon_class: "tobaco",
        title: "Refused/being accepted on special terms",
        description:
          "Have you or any person proposed to be insured under the policy has been refused insurance cover by any insurance company or being accepted on special terms?",
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
      },
    },
  };
};
