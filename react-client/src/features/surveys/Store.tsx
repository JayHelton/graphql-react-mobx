import { gql } from 'apollo-boost';
import { action, computed, observable } from 'mobx';

import { client } from '../../Context';

const query = gql`
    query SurveyQuery {
        survey {
            id
            name
            sections {
                id
                name
                questions {
                    question
                    type
                }
            }
        }
    }
`;

export class SurveyStore {
    @observable
    survey: any = {};

    @observable
    activeSectionIndex = 0;

    @computed
    get activeSection() {
        return this.survey?.sections?.[this.activeSectionIndex];
    }

    @action
    moveToNextSection() {
        if (this.survey?.sections[this.activeSectionIndex + 1]) {
            this.activeSectionIndex++;
        }
    }

    @action
    moveToPreviousSection() {
        if (this.survey?.sections[this.activeSectionIndex - 1]) {
            this.activeSectionIndex--;
        }
    }

    @action
    setSurvey(survey: any) {
        this.survey = survey;
    }

    @action
    async fetch() {
        const { data } = await client.query({ query });
        this.setSurvey(data.survey[0]);
    }
}
