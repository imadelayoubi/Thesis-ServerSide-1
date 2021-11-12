import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReviewsDocument = Reviews & Document;

@Schema()
export class Reviews {
  @Prop({ required: false })
  place: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  review: string;

  @Prop({ required: false })
  createdAt: Date;
}

export const ReviewsSchema = SchemaFactory.createForClass(Reviews);
