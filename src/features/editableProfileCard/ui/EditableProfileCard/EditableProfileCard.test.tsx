import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slices/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 30,
    currency: Currency.RUB,
    country: Country.RUSSIA,
    city: 'Moscow',
    username: 'admin1234',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,

        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Режим рид онли должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        // кликаем на кнопку, которую находим по id
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        // проверяем, есть ли элемент в доме, после клика
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значения должны обнуляться в дефолт', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        // кликаем на кнопку, которую находим по id
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        // очищаем инпуты
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        // записываем новое значение в инпуты
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        // проверяем, попало ли наше новое значение в инпут
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        // нажимаем на кнопку отмена
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        // проверяем, вернулось ли прежнее значение в инпут
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        // кликаем на кнопку, которую находим по id
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        // очищаем инпуты
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        // после изменения значений инпута нажимаем кнопку сохранить и ожидаем ошибку
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        // проверяем, появился ли текст ошибки в доме
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
        // мокаем запрос через метод jest.spyOn и передаем туда объект, который хотим замокать и потом метод
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        // кликаем на кнопку, которую находим по id
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        // передаем в инпут новые значения
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        // после изменения значений инпута нажимаем кнопку сохранить и ожидаем, что уйдет запрос
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        // проверяем, что метод был вызван
        expect(mockPutReq).toHaveBeenCalled();
    });
});
