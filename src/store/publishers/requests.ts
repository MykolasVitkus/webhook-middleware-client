import axios, { AxiosResponse } from 'axios';
import { getToken } from '../auth/service';
import { Publisher, PublisherDTO, PublisherForm } from './types';

interface GetPublishersResponse extends AxiosResponse {
    data: PublisherDTO[];
}

interface GetPublisherResponse extends AxiosResponse {
    data: PublisherDTO;
}

export const getPublishersQuery: () => Promise<Publisher[]> = () =>
    axios
        .get('/api/publishers', {
            headers: {
                Authorization: 'Bearer '.concat(getToken() as string),
            },
        })
        .then((res: GetPublishersResponse) => {
            return res.data.map((val: PublisherDTO) => {
                return {
                    id: val._id,
                    name: val.name,
                    createdAt: new Date(val.createdAt),
                };
            });
        });

export const getPublisherByIdQuery: (id: string) => Promise<Publisher> = (
    id: string,
) =>
    axios
        .get('/api/publishers/' + id, {
            headers: {
                Authorization: 'Bearer '.concat(getToken() as string),
            },
        })
        .then((res: GetPublisherResponse) => {
            return {
                id: res.data._id,
                name: res.data.name,
                createdAt: new Date(res.data.createdAt),
            };
        });

export const createPublisherQuery: (
    body: PublisherForm,
) => Promise<Publisher> = (body: PublisherForm) =>
    axios
        .post('/api/publishers', body, {
            headers: {
                Authorization: 'Bearer '.concat(getToken() as string),
            },
        })
        .then((res: GetPublisherResponse) => {
            return {
                id: res.data._id,
                name: res.data.name,
                createdAt: new Date(res.data.createdAt),
            };
        });

export const editPublisherQuery: (
    body: PublisherForm,
    id: string,
) => Promise<Publisher> = (body: PublisherForm, id: string) =>
    axios
        .put('/api/publishers/' + id, body, {
            headers: {
                Authorization: 'Bearer '.concat(getToken() as string),
            },
        })
        .then((res: GetPublisherResponse) => {
            return {
                id: res.data._id,
                name: res.data.name,
                createdAt: new Date(res.data.createdAt),
            };
        });

export const deletePublisherQuery: (id: string) => void = (id: string) =>
    axios.delete('/api/publishers/' + id, {
        headers: {
            Authorization: 'Bearer '.concat(getToken() as string),
        },
    });
