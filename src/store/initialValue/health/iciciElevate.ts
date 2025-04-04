import { TCareMedicalQuestion } from "@/store/types/Health/HealthQuotation/TCareMedicalQuestion";

export const ICICI_ELEVATE_QUESTION_INITIAL_VALUE =
  (): TCareMedicalQuestion => {
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
              title: "Hypertension High Blood pressure History",
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
              title: "Diabetes Mellitus Sugar History",
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
              title: "Hyperlipidemia Cholesterol History",
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
              title: "Insured smoke or consume Tobacco",
              description:
                "Does any perchild proposed to be insured smoke or consume Tobacco in any form or alcohol If yes please indicate the quantity consumed If not please indicate No?",
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
              title: "Heart and Circulatory Conditions Disorders",
              description:
                "Heart and Circulatory Conditions Disorders, chest pain, angina palpitations, congestive heart failure, coronary artery disease, heart attack, bypass surgery, angioplasty, valve disorder replacement, pacemaker insertion, rheumatic fever, congenital heart condition, varicose veins, clots in veins or arteries, blood disorders, anticoagulant therapy etc",
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
              title: "Urinary Tract Or Prostate Disease",
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
              title:
                "Musculoskeletal Conditions or Disorders Joint or back pain",
              description:
                "Musculoskeletal Conditions or Disorders Joint or back pain Arthritis Spondylosis Spondylitis SPinal disorders Surgeries Osteoporosis Osteomyelitis Joint Replacement Or Any Other Disorder of Muscle or Bone or Joint or ligaments tendons or discs gout herniated disc fractures or accidents or implants amputation or prosthesis Muscle weakness Polio etc",
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
              title: "Cancer or Tumor of any kind",
              description:
                "Cancer or Tumor Benign Or Malignant tumor Any Growth or Cyst any Cancer diagnosed earlier and or treatment taken for cancer",
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
                "Stroke Epilepsy Paralysis Or Any Other Brain Nervous System Disease",
              description:
                "Brain or Nervous System or Mental or Psychiatric Conditions or Developmental Disorders or Congenital or Birth defect Loss of consciousness fainting dizziness numbness or tingling weakness paralysis head injury stroke migraine headaches or chronic severe headaches sleep apnea multiple sclerosis seizures or epilepsy or any Other Brain or Nervous System Disease Mental or Psychiatric disorder ADHD autism disability or deformity whether physical or mental etc",
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
              title: "Any Gynecological Breast Disorder",
              description:
                "Female Reproductive Conditionsor Disorders Pelvic pain abnormal menstrual bleeding abnormal PAP smear endometriosis Fibroid Cyst or Fibroadenoma Bleeding Disorder Pelvic infection Or Any Other Gynecological or Breast cysts or lumps or tumor",
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
              title:
                "Metabolic Endocrine Conditions or Disorders and autoimmune or genetic disorder Adrenal or pituitary disorders thyroid disorder lupus scleroderma thyroid disorders Thallasemia anemia Hemophillia Obesity and related surgeries etc",
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
            "MQ12-SQ12": {
              id: "MQ12-SQ12",
              icon_class: "",
              status: false,
              title: "Eye Ear Nose and Throat Disorders Cataract glaucoma",
              description:
                "Eye Ear Nose and Throat Disorders Cataract glaucoma Opticneuritis retinal detachment conjunctivitis squint ptosis Blindness refractive error or spectacle number in dioptres otitis media Deviated Nasal Septum Otosclerosis Loss of speech Hearing loss nasal polyps chronic sinusitis Any other disorder of Ear Nose and Throat",
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
            "MQ13-SQ13": {
              id: "MQ13-SQ13",
              icon_class: "",
              status: false,
              title:
                "Is any female member pregnant tested positive with a home pregnancy test or ectopic pregnancy infertility treatment",
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
            "MQ14-SQ14": {
              id: "MQ14-SQ14",
              icon_class: "",
              status: false,
              title:
                "Does the person proposed to be insured suffer from any chronic or long term medical condition or have any other disability abnormality or recurrent illness or injury or unable to perform normal activities",
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
            "MQ15-SQ15": {
              id: "MQ15-SQ15",
              icon_class: "",
              status: false,
              title:
                "Has any member consulted with or received treatment from any doctor",
              description:
                "Has any member consulted with or received treatment from any doctor or other health care provider for any other condition or symptoms or undergone any hospitalization or illness or surgery or currently taking medications for any condition or medical procedures including diagnostic testing",
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
            "MQ16-SQ16": {
              id: "MQ16-SQ16",
              icon_class: "",
              status: false,
              title: "Brain Disease",
              description:
                "Does the individual have a family history of any disease like Heart disease or brain disease or cancer or organ failure or autoimmune or genetic disorder",
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
            "MQ17-SQ17": {
              id: "MQ17-SQ17",
              icon_class: "",
              status: false,
              title: "Has any application for life, health",
              description:
                "Has any application for life, health, hospital daily cash or critical illness insurance ever been declined, postponed, loaded or been made subject to any special conditions by any insurance comapany",
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
            "MQ18-SQ18": {
              id: "MQ18-SQ18",
              icon_class: "",
              status: false,
              title: "Have you or any other member proposed to be insured",
              description:
                "Have you or any other member proposed to be insured under this policy sought medical advice or been advised or awaiting any treatment medical or surgical due to any of the diseases / condition listed above or otherwise attend follow up for any diseases / condition / ailment / injury / addiction",
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
            "MQ19-SQ19": {
              id: "MQ12-SQ12",
              icon_class: "",
              status: false,
              title:
                "Sexually Transmitted Diseases HIV or AIDS immunodeficiency or any venereal disease VD or sexually transmitted disease STD",
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
            "MQ20-SQ20": {
              id: "MQ20-SQ20",
              icon_class: "",
              status: false,
              title: "Digestive Conditions or Disorders",
              description:
                "Digestive Conditions or Disorders, Jaundice, chronic diarrhea, intestinal bleeding or problems or polyps diseases of the pancreas liver or gall bladder hepatitis A or B or C or other jaundice Ulcerative colitis, Chrons disease, Inflammatory or irritable bowel disease, Cirrhosis unexplained weight loss or gain, eating disorder or any Other Gastro Intestinal condition",
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
            "MQ21-SQ21": {
              id: "MQ21-SQ21",
              icon_class: "",
              status: false,
              title:
                "Any Respiratory disease / Disease of Lungs, Pleura and airway",
              description:
                "Respiratory Conditions or Disorders Shortness or difficulty of breath Tuberculosis Asthma Bronchitis Chronic Obstructive Pulmonary Disease COPD chronic cough coughing of blood etc or any Other Lung or Respiratory Disease",
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
            "MQ22-SQ22": {
              id: "MQ22-SQ22",
              icon_class: "",
              status: false,
              title:
                "Has any application for life, health, hospital daily cash or critical illness insurance ever been declined, postponed, loaded or been made subject to any special conditions by any insurance company",
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
            "MQ23-SQ23": {
              id: "MQ23-SQ23",
              icon_class: "",
              status: false,
              title:
                "Have you or any other member proposed to be insured under this policy sought medical advice or been advised or awaiting any treatment medical or surgical due to any of the diseases / condition listed above or otherwise attend follow up for any diseases condition / ailment / injury / addiction",
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
            "MQ24-SQ24": {
              id: "MQ24-SQ24",
              icon_class: "",
              status: false,
              title:
                "Congenital disease like Cleft Lip, Cleft Palate, down syndrome, Turner Syndrome etc",
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
            "MQ25-SQ25": {
              id: "MQ24-SQ24",
              icon_class: "",
              status: false,
              title:
                "Blood and Immunity disease like Anaemia, Thalassemia, Ulcerative colitis et",
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
            "MQ26-SQ26": {
              id: "MQ26-SQ26",
              icon_class: "",
              status: false,
              title: "Skin disorders like Psoriasis, Urticaria, Cellulitis etc",
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

export const ICICI_ELEVATE_ADDONS_QUESTION_INITIAL_VALUE: any = {
  pageStatus: false,
  addonLabels: {
    Critical_Illness: false,
    Maternity: false,
    New_Born: false,
    Vaccination: false,
    Anuual_Health_Checkup: false,
    Domestic_Air_Ambulance: false,
    Dependent_Accomodation_benefit: false,
    Convalescence_Benefit: false,
    Durable_Medical_Equipment_Cover: false,
    Worldwide_Cover: false,
    Personal_Accident: false,
    // Sum_Insured_Protector: false,
    SI_Protector: false,
    Claim_Protector: false,
    Infinite_Care: false,
    Compassionate_Visit_HP: false,
    Nursing_at_Home_HP: false,

    BeFit_A_HP: false,
    BeFit_B_HP: false,
    BeFit_C_HP: false,
    BeFit_D_HP: false,
    BeFit_E_HP: false,
    BeFit_F_HP: false,
    BeFit_G_HP: false,
    // BeFit_H_HP: false,
    Room_Upgrade: false,
    Waiting_Period: false,
    PED: false,
    Room_Modifier: false,
    Maternity_waiting: false,
    Specific_Disease: false,
    Jump_Start: false,
  },
  memberDetails: [],
};
