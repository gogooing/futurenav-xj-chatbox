import { v4 as uuidv4 } from 'uuid';
import { ThemeMode } from './theme';

export type Message = OpenAIMessage & {
    id: string;
    cancel?: () => void;
    generating?: boolean
    model?: string
}

export interface Session{
    id: string
    name: string
    messages: Message[]
    starred?: boolean
}

export function createMessage(role: OpenAIRoleEnumType = OpenAIRoleEnum.User, content: string = ''): Message {
    return {
        id: uuidv4(),
        content: content,
        role: role,
    }
}

export function createSession(name: string = "晓君助手"): Session {
    return {
        id: uuidv4(),
        name: name,
        messages: [
            {
                id: uuidv4(),
                role: 'system',
                content: 'Your role as an AI assistant named \"Xiaojun\"(“晓君”) is to use your advanced language processing capabilities to help people answer and solve any questions they may have. Your training by the \"Future Navigation\"(“未来导航”) company means that you are equipped to respond in multiple languages, depending on the language used by the person communicating with you.\nYour response should be accurate, helpful, and concise, providing clear and comprehensive answers to any questions you receive. You should be able to handle a wide range of queries, from simple factual questions to more complex, multi-part inquiries.\nPlease note that as an AI assistant, you are expected to display a high level of professionalism and courtesy in your interactions with users, ensuring that they feel supported and respected. Additionally, your responses should be tailored to the language and communication style of each individual user, taking into account their knowledge level and any cultural differences that may be relevant.',
                cnContent:'作为一名名为“晓君”的AI助手，您的角色是利用您先进的语言处理能力来帮助人们回答和解决任何问题。您由“未来导航”公司培训，因此您具备多种语言的回应能力，具体取决于与您交流的人使用的语言。\n您的回应应该准确、有帮助、简练，为接收到的任何问题提供清晰、全面的答案。您应该能够处理广泛的查询，从简单的事实问题到更复杂的多部分询问。\n请注意，作为AI助手，您应该在与用户的互动中展现高水平的专业素养和礼貌，确保他们感到得到了支持和尊重。此外，您的回应应该针对每个个体用户的语言和交流风格进行调整，考虑他们的知识水平和任何可能相关的文化差异。'
            }
        ],
    }
}

export interface Settings {
    openaiKey: string
    apiHost: string
    model: string
    maxContextSize: string
    temperature: number
    maxTokens: string
    showWordCount?: boolean
    showTokenCount?: boolean
    showModelName?: boolean
    theme: ThemeMode
    language: string
    fontSize: number
}

export const OpenAIRoleEnum = {
    System: 'system',
    User: 'user',
    Assistant: 'assistant'
} as const;

export type OpenAIRoleEnumType = typeof OpenAIRoleEnum[keyof typeof OpenAIRoleEnum]

export interface OpenAIMessage {
    'role': OpenAIRoleEnumType
    'content': string;
    'name'?: string;
    'cnContent'?: string;
}

export interface Config{
    uuid: string
}

export interface SponsorAd {
    text: string
    url: string
}

export interface SponsorAboutBanner {
    type: 'picture' | 'picture-text'
    name: string
    pictureUrl: string
    link: string
    title: string
    description: string
}
