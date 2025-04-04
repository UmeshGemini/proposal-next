import { TCareMedicalQuestion } from "@/store/types/Health/HealthQuotation/TCareMedicalQuestion";

export const CARE_QUESTION_INITIAL_VALUE = (): TCareMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "Pre-Existing Diseases",
        description:
          "Does any perchild(s) to be insured has any Pre-Existing diseases?",
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
            title: "",
            description:
              "Diabetes Mellitus type 1 or Diabetes on insulin or Diabetes associated with blindness or chronic foot ulcer?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
                selection_status: false,
              },
              child_three: {
                keyName: "child_three",
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
          "MQ2-SQ2": {
            id: "MQ2-SQ2",
            icon_class: "",
            status: false,
            title: "",
            description:
              "Are you suffering from Hypertension/High Blood Pressure?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F2": {
            //     id: "MQ1-SQ1-F2",
            //     title: "Existing Since",
            //     field_type: "DATEPICKER",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ3-SQ3": {
            id: "MQ3-SQ3",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Liver Diseases?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F3": {
            //     id: "MQ1-SQ1-F3",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ4-SQ4": {
            id: "MQ4-SQ4",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from HIV/AIDS/STD?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F4": {
            //     id: "MQ1-SQ1-F4",
            //     title: "Existing Since",
            //     field_type: "DATEPICKER",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ5-SQ5": {
            id: "MQ5-SQ5",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Cancer?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F5": {
            //     id: "MQ1-SQ1-F5",
            //     title: "Existing Since",
            //     field_type: "DATEPICKER",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ6-SQ6": {
            id: "MQ6-SQ6",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Cardiac Disease?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F6": {
            //     id: "MQ1-SQ1-F6",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ7-SQ7": {
            id: "MQ7-SQ7",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Arthritis/Joint pain?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
          "MQ8-SQ8": {
            id: "MQ8-SQ8",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Kidney Disease?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ9-SQ9": {
            id: "MQ9-SQ9",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Paralysis/stroke?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ10-SQ10": {
            id: "MQ10-SQ10",
            icon_class: "",
            status: false,
            title: "",
            description: "Are you suffering from Congenital Disorder?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ11-SQ11": {
            id: "MQ11-SQ11",
            icon_class: "",
            status: false,
            title: "",
            description:
              "Any Respiratory disease / Disease of Lungs, Pleura and airway (including but not limited to Asthma / Tuberculosis / Pleural effusion / Bronchitis / Emphysema)?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ12-SQ12": {
            id: "MQ12-SQ12",
            icon_class: "",
            status: false,
            title: "",
            description:
              "Any disorders of the endocrine system (including but not limited to Pituitary / Parathyroid / adrenal gland disorders)?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ13-SQ13": {
            id: "MQ13-SQ13",
            icon_class: "",
            status: false,
            title: "",
            description:
              "Has any of the Proposed to be Insured consulted/taken treatment or recommended to take investigations/medication/surgery other than for childbirth/minor injuries?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ14-SQ14": {
            id: "MQ14-SQ14",
            icon_class: "",
            status: false,
            title: "",
            description:
              "Has any of the Proposed to be Insured been hospitalized or has been under any prolonged treatment for any illness/injury or has undergone surgery other than for childbirth/minor injuries?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
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
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
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
                field_data: {
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
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
                  "MQ1-SQ1-F2": {
                    id: "MQ1-SQ1-F2",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
          "MQ15-SQ15": {
            id: "MQ15-SQ15",
            icon_class: "",
            status: false,
            title: "",
            description:
              "Do You smoke, consume alcohol, or chew tobacco, ghutka or paan or use any recreational drugs? If ‘Yes’ then please provide the frequency & amount consumed?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                selection_status: false,
                field_data: {
                  "MQ15-SQ15-F1": {
                    id: "MQ15-SQ15-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ15-SQ15-F2": {
                    id: "MQ15-SQ15-F2",
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
                  "MQ15-SQ15-F1": {
                    id: "MQ15-SQ15-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ15-SQ15-F2": {
                    id: "MQ15-SQ15-F2",
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
                  "MQ15-SQ15-F1": {
                    id: "MQ15-SQ15-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ15-SQ15-F2": {
                    id: "MQ15-SQ15-F2",
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
                  "MQ15-SQ15-F1": {
                    id: "MQ15-SQ15-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ15-SQ15-F2": {
                    id: "MQ15-SQ15-F2",
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
                  "MQ15-SQ15-F1": {
                    id: "MQ15-SQ15-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ15-SQ15-F2": {
                    id: "MQ15-SQ15-F2",
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
                  "MQ15-SQ15-F1": {
                    id: "MQ15-SQ15-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",
                    value: { value: "", warning: false },
                  },
                  "MQ15-SQ15-F2": {
                    id: "MQ15-SQ15-F2",
                    title: "Description",
                    field_type: "TEXTFIELD",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
          },
          "MQ16-SQ16": {
            id: "MQ16-SQ16",
            icon_class: "",
            status: false,
            title: "",
            description: "Any other diseases or ailments not mentioned above?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                selection_status: false,
                field_data: {
                  "MQ16-SQ16-F1": {
                    id: "MQ16-SQ16-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",

                    value: { value: "", warning: false },
                  },
                  "MQ16-SQ16-F2": {
                    id: "MQ16-SQ16-F2",
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
                  "MQ16-SQ16-F1": {
                    id: "MQ16-SQ16-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",

                    value: { value: "", warning: false },
                  },
                  "MQ16-SQ16-F2": {
                    id: "MQ16-SQ16-F2",
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
                  "MQ16-SQ16-F1": {
                    id: "MQ16-SQ16-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",

                    value: { value: "", warning: false },
                  },
                  "MQ16-SQ16-F2": {
                    id: "MQ16-SQ16-F2",
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
                  "MQ16-SQ16-F1": {
                    id: "MQ16-SQ16-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",

                    value: { value: "", warning: false },
                  },
                  "MQ16-SQ16-F2": {
                    id: "MQ16-SQ16-F2",
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
                  "MQ16-SQ16-F1": {
                    id: "MQ16-SQ16-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",

                    value: { value: "", warning: false },
                  },
                  "MQ16-SQ16-F2": {
                    id: "MQ16-SQ16-F2",
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
                  "MQ16-SQ16-F1": {
                    id: "MQ16-SQ16-F1",
                    title: "Existing Since",
                    field_type: "DATEPICKER",

                    value: { value: "", warning: false },
                  },
                  "MQ16-SQ16-F2": {
                    id: "MQ16-SQ16-F2",
                    title: "Description",
                    field_type: "TEXTFIELD",
                    value: { value: "", warning: false },
                  },
                },
              },
            },
            // field_data: {
            //   "MQ1-SQ1-F8": {
            //     id: "MQ1-SQ1-F8",
            //     field_type: "DATEPICKER",
            //     title: "Existing Since",
            //     value: { value: "", warning: false },
            //   },
            // },
          },
        },
      },
    },
    MQ02: {
      main_question: {
        id: "MQ02",
        icon_class: "tobaco",
        title: "Hospitalized",
        description:
          "Has any of the new perchild(s) to be insured been diagnosed / hospitalized for any illness / injury during the last 48 months?",
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
    MQ03: {
      main_question: {
        id: "MQ03",
        icon_class: "tobaco",
        title: "claim",
        description:
          "Has any of the new perchild(s) to be insured been diagnosed / hospitalized for any illness / injury during the last 48 months?",
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
    MQ04: {
      main_question: {
        id: "MQ04",
        icon_class: "tobaco",
        title: "Declined/Cancelled",
        description:
          "Has any proposal for Health Insurance of the new perchild(s) to be insured, been declined, cancelled or charged a higher premium?",
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
    MQ05: {
      main_question: {
        id: "MQ05",
        icon_class: "tobaco",
        title: "Other health insurance policy",
        description:
          "Is any of the perchild(s) to be insured, already covered under any other health insurance policy of Religare Health Insurance?",
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
