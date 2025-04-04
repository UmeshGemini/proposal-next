import { TCareMedicalQuestion } from "@/store/types/Health/HealthQuotation/TCareMedicalQuestion";

export const HDFC_QUESTION_INITIAL_VALUE = (): TCareMedicalQuestion => {
  return {
    MQ01: {
      main_question: {
        id: "MQ01",
        icon_class: "tobaco",
        title: "",
        description: "",
        status: false,

        sub_question: {
          "MQ1-SQ1": {
            id: "MQ1-SQ1",
            icon_class: "",
            status: false,
            title: "Pre-Existing Diseases",
            description: "Any other diseases or ailments not mentioned above?",
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
            title: "Smoking",
            description: "Does any of the members Smoke?",
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
