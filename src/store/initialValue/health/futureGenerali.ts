import { TMedicalQuestionFutureGenerali } from "@/store/types/Health/HealthQuotation/TMedicalQuestionV2";

export const FUTURE_GENERALI_QUESTION_INITIAL_VALUE =
  (): TMedicalQuestionFutureGenerali => {
    return {
      HQ01: {
        main_question: {
          id: "HQ01",
          desc: "Does any perchild(s) to be insured has any Pre-Existing illness?",
          status: false,
          icon_class: "preexisting",
          title: "Pre-Exisiting Diseases",
        },
        sub_question: {
          SQ01: {
            id: "SQ01",
            desc: "",
            status: false,
            icon_class: "",
            title:
              "Is the perchild already have Health Total policy of Future Generali?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                memberId: "MO7",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
                memberId: "MO8",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                memberId: "MO9",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                memberId: "MO10",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
                memberId: "MO11",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                memberId: "MO12",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
            },
          },
          SQ02: {
            id: "SQ02",
            desc: "",
            status: false,
            icon_class: "diabates",
            title:
              "Is the perchild have at present or in the past had any health complaints, signs or symptoms, or were taking treatment or were hospitalized for any illness.",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                memberId: "MO72",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
                memberId: "MO82",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                memberId: "MO92",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                memberId: "MO102",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
                memberId: "MO112",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                memberId: "MO122",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
            },
          },
          SQ03: {
            id: "SQ03",
            desc: "",
            status: false,
            icon_class: "",
            title:
              "Is the perchild at present or in the past met with any accident / injury or were hospitalized or taking treatment for any accident injury?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                memberId: "MO73",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
                memberId: "MO83",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                memberId: "MO93",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                memberId: "MO103",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
                memberId: "MO113",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                memberId: "MO123",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
            },
          },
          SQ04: {
            id: "SQ04",
            desc: "",
            status: false,
            icon_class: "MO25",
            title:
              "Is the perchild undergone any surgery in the past or going for any planned surgery at present / recent future?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                memberId: "MO74",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
                memberId: "MO84",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                memberId: "MO94",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                memberId: "MO104",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
                memberId: "MO114",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                memberId: "MO124",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
            },
          },
          SQ05: {
            id: "SQ05",
            desc: "",
            status: false,
            icon_class: "MO25",
            title: "Whether any Health Insurance Policy has been declined?",
            member_data: {
              adult_one: {
                keyName: "adult_one",
                name: "",
                image_class: "adult",
                memberId: "MO75",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              adult_two: {
                keyName: "adult_two",
                name: "",
                image_class: "adult",
                memberId: "MO85",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_four: {
                keyName: "child_four",
                name: "",
                image_class: "child",
                memberId: "MO95",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_one: {
                keyName: "child_one",
                name: "",
                image_class: "child",
                memberId: "MO105",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_three: {
                keyName: "child_three",
                name: "",
                image_class: "child",
                memberId: "MO115",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
              child_two: {
                keyName: "child_two",
                name: "",
                image_class: "child",
                memberId: "MO125",
                selection_status: false,
                field_data: [
                  {
                    field_type: "TEXTFIELD",
                    dropdown_data: [{ label: "", value: "" }],
                  },
                ],
              },
            },
          },
        },
      },
      HQ03: {
        main_question: {
          id: "HQ03",
          desc: "Diabetes (up to + 15 mg/dl above *Normal range ) 10% , Diabetes (+16 mg/dl to + 30 mg/dl above *Normal range) 20%",
          status: false,
          title: "Diabetes?",
          icon_class: "medicines",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO31",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO32",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO33",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO34",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO35",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO36",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ05: {
        main_question: {
          id: "HQ05",
          desc: "Hypertension (140/90mmHg) 10% , Hypertension ( 141 to 150 mmHg Systolic / 91 to 100 mm Hg diastolic ) 20%",
          status: false,
          title: "Hypertension?",
          icon_class: "headache",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO310",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO320",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO330",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO340",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO350",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO360",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ06: {
        main_question: {
          id: "HQ06",
          desc: "Is the perchild in good health and free from physical and mental disease or infirmity or medical complaints or deformity?",
          status: false,
          title: "Good Health",
          icon_class: "goodhealth",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO311",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO321",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO331",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO341",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO351",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO361",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ07: {
        main_question: {
          id: "HQ07",
          desc: "Is the perchild have at present or in the past had any health complaints, signs or symptoms, or were taking treatment or were hospitalized for any illness?",
          status: false,
          title: "Hospitalization",
          icon_class: "hospitalized",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO312",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO322",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO332",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO342",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO352",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO362",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ08: {
        main_question: {
          id: "HQ08",
          desc: "Is the perchild at present or in the past met with any accident / injury or were hospitalized or taking treatment for any accident injury?",
          status: false,
          title: "Accident Injury",
          icon_class: "treatment",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO313",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO323",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO333",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO343",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO353",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO363",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ09: {
        main_question: {
          id: "HQ09",
          desc: "Is the perchild undergone any surgery in the past or going for any planned surgery at present / recent future?",
          status: false,
          title: "Surgery",
          icon_class: "treatment",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO314",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO324",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO334",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO344",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO354",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO364",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ10: {
        main_question: {
          id: "HQ10",
          desc: "Any of the insured perchilds is pregnant?",
          status: false,
          title: "Pregnancy",
          icon_class: "medicalhistory",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO315",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO325",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO335",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO345",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO355",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO365",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ11: {
        main_question: {
          id: "HQ11",
          desc: "Is the perchild Non-Indian resident?",
          status: false,
          title: "Indian",
          icon_class: "treatment",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO316",
              selection_status: false,
              field_data: [],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO326",
              selection_status: false,
              field_data: [],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO336",
              selection_status: false,
              field_data: [],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO346",
              selection_status: false,
              field_data: [],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO356",
              selection_status: false,
              field_data: [],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO366",
              selection_status: false,
              field_data: [],
            },
          },
        },
      },
      HQ02: {
        main_question: {
          id: "HQ02",
          desc: "Do any of the members smoke?",
          status: false,
          title: "Somking",
          icon_class: "smoking",
          member_data: {
            adult_one: {
              keyName: "adult_one",
              name: "",
              image_class: "adult",
              memberId: "MO25",
              selection_status: false,
              field_data: [
                {
                  field_type: "DROPDOWN",
                  dropdown_data: [{ label: "", value: "" }],
                },
              ],
            },
            adult_two: {
              keyName: "adult_two",
              name: "",
              image_class: "adult",
              memberId: "MO26",
              selection_status: false,
              field_data: [
                {
                  field_type: "DROPDOWN",
                  dropdown_data: [{ label: "", value: "" }],
                },
              ],
            },
            child_four: {
              keyName: "child_four",
              name: "",
              image_class: "child",
              memberId: "MO27",
              selection_status: false,
              field_data: [
                {
                  field_type: "DROPDOWN",
                  dropdown_data: [{ label: "", value: "" }],
                },
              ],
            },
            child_one: {
              keyName: "child_one",
              name: "",
              image_class: "child",
              memberId: "MO28",
              selection_status: false,
              field_data: [
                {
                  field_type: "DROPDOWN",
                  dropdown_data: [{ label: "", value: "" }],
                },
              ],
            },
            child_three: {
              keyName: "child_three",
              name: "",
              image_class: "child",
              memberId: "MO29",
              selection_status: false,
              field_data: [
                {
                  field_type: "DROPDOWN",
                  dropdown_data: [{ label: "", value: "" }],
                },
              ],
            },
            child_two: {
              keyName: "child_two",
              name: "",
              image_class: "child",
              memberId: "MO30",
              selection_status: false,
              field_data: [
                {
                  field_type: "DROPDOWN",
                  dropdown_data: [{ label: "", value: "" }],
                },
              ],
            },
          },
        },
      },
    };
  };
