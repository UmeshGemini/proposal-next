import { TBajajMedicalQuestion } from "@/store/types/Health/HealthQuotation/TBajajMedicalQuestion";

export const BAJAJ_MEDICAL_QUESTION_INITIAL_VALUE =
  (): TBajajMedicalQuestion => {
    return {
      MQ01: {
        main_question: {
          id: "MQ01",
          icon_class: "tobaco",
          title: "Pre-Existing Diseases",
          description:
            "Has any of the persons to be insured suffer from/or investigated for any of the following? Disorder of the heart, or circulatory system, chest pain, high blood pressure, stroke, asthma any respiratory conditions, cancer tumor lump of any kind, diabetes, hepatitis, disorder of urinary tract or kidneys, blood disorder, any mental or psychiatric conditions, any disease of brain or nervous system, fits (epilepsy) slipped disc, backache, any congenital/ birth defects/ urinary diseases, AIDS or positive HIV, If yes, indicate in the table given below.If yes please provide details",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title: "Hypertension",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {},
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {},
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
              },
            },
            "MQ2-SQ2": {
              id: "MQ2-SQ2",
              icon_class: "",
              status: false,
              title: "Cholesterol Disorder",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {},
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {},
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
              },
            },
            "MQ3-SQ3": {
              id: "MQ3-SQ3",
              icon_class: "",
              status: false,
              title: "Cardiovascular diseases",
              description: "",
              member_data: {
                adult_one: {
                  keyName: "adult_one",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {},
                },
                adult_two: {
                  keyName: "adult_two",
                  name: "",
                  image_class: "adult",
                  selection_status: false,
                  field_data: {},
                },
                child_one: {
                  keyName: "child_one",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_two: {
                  keyName: "child_two",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_three: {
                  keyName: "child_three",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
                },
                child_four: {
                  keyName: "child_four",
                  name: "",
                  image_class: "child",
                  selection_status: false,
                  field_data: {},
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
          title: "Intoxication Declaration",
          description:
            "Select 'Yes' if any insured member Smokes, consumes Tobacco in any form, or drinks Alcohol?",
          status: false,
          sub_question: {
            "MQ1-SQ1": {
              id: "MQ1-SQ1",
              icon_class: "",
              status: false,
              title: "Does any of the members consume Alcohol?",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
                      field_type: "TEXTFIELD",
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
              title: "Does any of the members consume smoking?",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
                      field_type: "TEXTFIELD",
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
              title: "Does any of the members consume tobacco?",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
                      title: "Month",
                      field_type: "TEXTFIELD",
                      value: { value: "", warning: false },
                    },
                    "MQ1-SQ1-F2": {
                      id: "MQ1-SQ1-F2",
                      title: "Year",
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
          title:
            "Do you or any of the family members to be covered have/had any health complaints/met with any accident in the past 4 years and prior to 4 years and have been taking treatment, regular medication (self/ prescribed)or planned for any treatment / surgery / hospitalization?",
          description: "",
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
          title:
            "Have you or any of your immediate family members (father, mother, brother or sister) have/ had diabetes, hypertension,cancer, heart attack, or stroke and at What age? If yes, was it before age 60 years or after 60 years",
          description: "",
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
          title:
            "Has any proposal for life, critical illness or health related insurance on your life or lives ever been postponed, declined or accepted on special terms? If yes, give details",
          description: "",
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
