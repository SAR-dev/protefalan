import React, { useState } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  ConversationHeader,
  Avatar,
  VoiceCallButton,
  VideoCallButton,
  InfoButton,
  ExpansionPanel,
  TypingIndicator,
  MessageSeparator,
} from '@chatscope/chat-ui-kit-react';
import NavLayout from '../layouts/NavLayout';
import { Container, Flex, Text } from '@chakra-ui/react';

const ChatMessages = () => {
  const [messageInputValue, setMessageInputValue] = useState('');
  return (
    <NavLayout>
      <Container maxW={'6xl'}>
        <div
          style={{
            height: '600px',
            position: 'relative',
          }}
        >
          <MainContainer responsive>
            <Sidebar position="left" scrollable={false}>
              <Search placeholder="Search..." />
              <ConversationList>
                <Conversation
                  name="Lilly"
                  lastSenderName="Lilly"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Lilly"
                    status="available"
                  />
                </Conversation>

                <Conversation
                  name="Joe"
                  lastSenderName="Joe"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Joe"
                    status="dnd"
                  />
                </Conversation>

                <Conversation
                  name="Emily"
                  lastSenderName="Emily"
                  info="Yes i can do it for you"
                  unreadCnt={3}
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Emily"
                    status="available"
                  />
                </Conversation>

                <Conversation
                  name="Kai"
                  lastSenderName="Kai"
                  info="Yes i can do it for you"
                  unreadDot
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Kai"
                    status="unavailable"
                  />
                </Conversation>

                <Conversation
                  name="Akane"
                  lastSenderName="Akane"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Akane"
                    status="eager"
                  />
                </Conversation>

                <Conversation
                  name="Eliot"
                  lastSenderName="Eliot"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Eliot"
                    status="away"
                  />
                </Conversation>

                <Conversation
                  name="Zoe"
                  lastSenderName="Zoe"
                  info="Yes i can do it for you"
                  active
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Zoe"
                    status="dnd"
                  />
                </Conversation>

                <Conversation
                  name="Patrik"
                  lastSenderName="Patrik"
                  info="Yes i can do it for you"
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Patrik"
                    status="invisible"
                  />
                </Conversation>
              </ConversationList>
            </Sidebar>

            <ChatContainer>
              <ConversationHeader>
                <ConversationHeader.Back />
                <Avatar
                  src={
                    'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                  }
                  name="Zoe"
                />
                <ConversationHeader.Content
                  userName="Zoe"
                  info="Active 10 mins ago"
                />
                <ConversationHeader.Actions>
                  <VoiceCallButton />
                  <VideoCallButton />
                  <InfoButton />
                </ConversationHeader.Actions>
              </ConversationHeader>
              <MessageList
                typingIndicator={<TypingIndicator content="Zoe is typing" />}
              >
                <MessageSeparator content="Saturday, 30 November 2019" />

                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'single',
                  }}
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Zoe"
                  />
                </Message>

                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Patrik',
                    direction: 'outgoing',
                    position: 'single',
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'first',
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'normal',
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'normal',
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'last',
                  }}
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Zoe"
                  />
                </Message>

                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Patrik',
                    direction: 'outgoing',
                    position: 'first',
                  }}
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Patrik',
                    direction: 'outgoing',
                    position: 'normal',
                  }}
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Patrik',
                    direction: 'outgoing',
                    position: 'normal',
                  }}
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Patrik',
                    direction: 'outgoing',
                    position: 'last',
                  }}
                />

                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'first',
                  }}
                  avatarSpacer
                />
                <Message
                  model={{
                    message: 'Hello my friend',
                    sentTime: '15 mins ago',
                    sender: 'Zoe',
                    direction: 'incoming',
                    position: 'last',
                  }}
                >
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Zoe"
                  />
                </Message>
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                value={messageInputValue}
                onChange={val => setMessageInputValue(val)}
                onSend={() => setMessageInputValue('')}
              />
            </ChatContainer>

            <Sidebar position="right">
              <ExpansionPanel open title="ABOUT">
                <Flex justifyContent={'center'} mb={2}>
                  <Avatar
                    src={
                      'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'
                    }
                    name="Zoe"
                    size="lg"
                  />
                </Flex>
                <Text
                  fontSize={'xl'}
                  fontWeight={'bold'}
                  color={'gray.700'}
                  textAlign="center"
                >
                  Sayed Rafi
                </Text>
                <Text
                  fontWeight={'semibold'}
                  color={'gray.500'}
                  textAlign="center"
                  mb={3}
                >
                  sayed-rafi
                </Text>
              </ExpansionPanel>
              <ExpansionPanel title="LOCALIZATION">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="MEDIA">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="SURVEY">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
              <ExpansionPanel title="OPTIONS">
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
                <p>Lorem ipsum</p>
              </ExpansionPanel>
            </Sidebar>
          </MainContainer>
        </div>
      </Container>
    </NavLayout>
  );
};

export default ChatMessages;
