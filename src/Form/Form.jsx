import React from 'react';
import {
    Button,
    DatePicker,
    FormItem,
    FormLayout,
    FormLayoutGroup,
    Group, Header, Input,
    Panel,
    PanelHeader,
    SegmentedControl,
    Select, Textarea
} from "@vkontakte/vkui";
import styles from './Form.module.css';

function Form() {
    const generateSelectableNumbers = (amount) => {
      return [...Array(amount).keys()].map((elem) => {return {label: `${elem + 1}`, value: elem + 1}})
    }

    const getCurrentDate = () => {
      let today = new Date();
      return {day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear()};
    }

    return (
        <Panel>
            <PanelHeader>Booking Service</PanelHeader>
            <Group className={styles.group}  header={<Header>Бронирование переговорной</Header>}>
                <FormLayout>
                    <FormLayoutGroup mode={'horizontal'}>
                        <FormItem top={'Башня'}>
                            <SegmentedControl size={'m'} options={[{label: 'A', value:'A'}, {label: 'Б', value:'B'}]}/>
                        </FormItem>
                        <FormItem top={'Этаж'}>
                            <Select placeholder={'Не выбран'} options={generateSelectableNumbers(27)}/>
                        </FormItem>
                        <FormItem top={'Комната'}>
                            <Select placeholder={'Не выбран'} options={generateSelectableNumbers(10)}/>
                        </FormItem>
                    </FormLayoutGroup>
                    <FormItem top={'дата'}>
                        <DatePicker
                            min={getCurrentDate()}
                            defaultValue={getCurrentDate()}
                            max={{day: 1, month: 1, year: 2050}}
                            dayPlaceholder="ДД"
                            monthPlaceholder="ММММ"
                            yearPlaceholder="ГГГГ"
                        />
                    </FormItem>
                    <FormLayoutGroup mode={'horizontal'}>
                        <FormItem top={'От'}>
                            <Input type={'time'}/>
                        </FormItem>
                        <FormItem top={'До'}>
                            <Input type={'time'}/>
                        </FormItem>
                    </FormLayoutGroup>
                    <FormLayoutGroup mode={'horizontal'}>
                        <FormItem top={'Комментарий'}>
                            <Textarea/>
                        </FormItem>
                    </FormLayoutGroup>
                    <div className={styles.buttonWrapper}>
                        <Button size={'l'} appearance={'neutral'}>
                            Очистить
                        </Button>
                        <Button type={'submit'} size={'l'} >
                            Отправить
                        </Button>
                    </div>
                </FormLayout>
            </Group>
        </Panel>
    )
}

export default Form;