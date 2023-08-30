"use client";
import {
  Button,
  Container,
  Divider,
  Text,
  Textarea,
  Title,
  Group,
  Pagination,
} from "@mantine/core";
import { Rating } from "@mantine/core";
export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      ></Textarea>
      <Button type="submit" mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating size="sm" value={5} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm"></Divider>
      <Group position="center">
        <Title order={4} align="end">
          Mark Zuck
        </Title>
        <Rating size="sm" value={4} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination mt="md" total={20} color="orange" position="center" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Pornchanok Punin 650612092
      </Text>
    </Container>
  );
}
