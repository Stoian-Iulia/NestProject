/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTrackDto } from './dto/create.track.dto';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { ObjectId } from 'mongoose';

@Injectable()

export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0})
        return track;
    }

    async getAll(): Promise <Track[]> {
        const tracks = await this.trackModel.find();
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track> {
        const track = await this.trackModel.findById(id);
        return track;
    }
    
    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track.id;

    }
}
